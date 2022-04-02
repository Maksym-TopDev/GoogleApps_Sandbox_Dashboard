// import { s3 } from "aws-sdk";
// import unzipper from "unzipper";

function extractZip(Bucket, buffer) {
  // const file_stream = s3
  //   .getObject({ Bucket: bucket, Key: filename })
  //   .createReadStream()
  //   .on("error", (e) => console.log(`Error extracting file: `, e))
  //   .pipe(
  //     unzipper.ParseOne("project.txt", {
  //       forceStream: true,
  //     })
  //   );

  // console.log(file_stream)
}

export default extractZip;