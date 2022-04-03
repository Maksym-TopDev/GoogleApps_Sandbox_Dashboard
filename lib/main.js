const archiver = require('archiver');
const { WritableStreamBuffer } = require('stream-buffers');
const { fileType } = require('./ecmaModules');
const { AES, lib, enc } = require("crypto-js");


async function encryptAndPushCode(bundleFile, secret = lib.WordArray.random(16).toString()) {
  let bundleContents = bundleFile[0].buffer.toString('utf-8');
  const encryptedData = AES.encrypt(bundleContents, secret).toString();
  
  return {
    encryptedData, // zip and buffer
    secret
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

function determineAndGetChanges(files, body) {
  const previousFields = JSON.parse(body.previousFieldsPayload);

  delete body.createdAt;
  delete body.updatedAt;
  delete body.previousFieldsPayload;
  delete body.projectType;
  delete body.id;

  const acceptedFields = {};
  for (const key in body) {
    const value = body[key];
    const previousValue = previousFields[key];

    if (value !== previousValue) {
      acceptedFields[key] = value;
    }
  }

  return {
    filesExist: !!Object.keys(files).length,
    acceptedFields
  };
}

module.exports = {
  zipDataIntoStream,
  encryptAndPushCode,
  getDecryptedData,
  determineAndGetChanges
};