const archiver = require('archiver');
const { WritableStreamBuffer } = require('stream-buffers');
const { fileType } = require('./ecmaModules');
const { AES, lib, enc } = require("crypto-js");


async function encryptAndPushCode(bundleFile, secret_key = lib.WordArray.random(16).toString()) {
  let bundleContents = bundleFile[0].buffer.toString('utf-8');
  const encryptedData = AES.encrypt(bundleContents, secret_key).toString();
  
  return {
    encryptedData, // zip and buffer
    secret_key
  };
}

function getDecryptedData(encryption, secret) {
  const decryptedData = AES.decrypt(encryption, secret).toString(enc.Utf8);

  return decryptedData;
}

function zipDataIntoStream(fileData, ...media) {
  return new Promise((resolve, rejct) => {
    let outputStreamBuffer = new WritableStreamBuffer({
      initialSize: (1000 * 1024),   // start at 1000 kilobytes.
      incrementAmount: (1000 * 1024) // grow by 1000 kilobytes each time buffer overflows.
    });

    let archive = archiver('zip', {
      zlib: { level: 9 } // Sets the compression level.
    });
    archive.pipe(outputStreamBuffer);
    
    archive.append(fileData, { name: "project.txt"});
    archive.finalize();

    outputStreamBuffer.on('finish', async function () {
      const finishedBuffer = outputStreamBuffer.getContents();
      const {fileTypeFromBuffer} = await fileType;
      const mimetype = await fileTypeFromBuffer(finishedBuffer);

      resolve({
        buffer: finishedBuffer,
        mimetype: mimetype.mime
      });
    });
  });
}

async function determineAndGetChanges(files, body, encrypt, zip) {
  const previousFields = JSON.parse(body.previousFieldsPayload);

  delete body.createdAt;
  delete body.updatedAt;
  delete body.previousFieldsPayload;
  delete body.projectType;
  delete body.id;

  async function bundleAndReturnListOfFiles(app) {
    const { 
      encryptedData, 
      secret_key
    } = await encrypt(app);
    const project = await zip(encryptedData);
    body.secret_key = secret_key;

    return {name: "core", data: project.buffer, type: project.mimetype};;
  }

  const fileCollection = Object.keys(files);
  const filesArrayIfExist = [];
  for (const fileKey of fileCollection) {
    const file = files[fileKey];
    
    if (file[0].fieldname === "app") {
      const encryptedAndZipped = await bundleAndReturnListOfFiles(file);
      filesArrayIfExist.push(encryptedAndZipped);
    } else {
      filesArrayIfExist.push({name: "icon", data: file[0].buffer, type: file[0].mimetype});
    }
  }

  const acceptedFields = {};
  for (const key in body) {
    const value = body[key];
    const previousValue = previousFields[key];

    if (value !== previousValue) {
      acceptedFields[key] = value;
    }
  }

  return {
    filesArrayIfExist,
    acceptedFields
  };
}

module.exports = {
  zipDataIntoStream,
  encryptAndPushCode,
  getDecryptedData,
  determineAndGetChanges
};