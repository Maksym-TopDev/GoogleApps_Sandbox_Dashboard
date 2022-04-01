import yauzl from "yauzl";


function extractZip(Bucket, buffer) {
  return new Promise((resolve, reject) => {
    yauzl.fromBuffer(buffer, { lazyEntries: true }, function (err, zipfile) {
      if (err) reject(err);
      zipfile.readEntry();
      zipfile.on("entry", function (entry) {
        if (/\/$/.test(entry.fileName)) {
          // Directory entry
          // skip to the next entry
          zipfile.readEntry();
        } else {
          // file entry
          console.log("unzipped encryption -->", entry)
          
          // zipfile.openReadStream(entry, function (err, readStream) {
          //   if (err) reject(err);
          //   const fileNames = entry.fileName.split(".");
          //   const { writeStream, promise } = uploadStream({
          //     Bucket,
          //     Key: `${fileNames[0]}.${uuidv4()}.${
          //       fileNames[fileNames.length - 1]
          //     }`,
          //   });
          //   readStream.pipe(writeStream);
          //   promise.then(() => {
          //     console.log(entry.fileName + " Uploaded successfully!");
          //     zipfile.readEntry();
          //   });
          // });
        }
      });
      zipfile.on("end", () => resolve("end"));
    });
  });
}

export default extractZip;