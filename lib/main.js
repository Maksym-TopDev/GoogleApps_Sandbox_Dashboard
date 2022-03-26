const archiver = require('archiver');
const { WritableStreamBuffer } = require('stream-buffers');
const { fileType } = require('./ecmaModules');


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
  })
}

module.exports = {
  zipDataIntoStream
};