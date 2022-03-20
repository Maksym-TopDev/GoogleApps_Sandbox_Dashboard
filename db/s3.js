const aws = require("aws-sdk");

require("dotenv").config();
const { 
	ACCESS_KEY_ID,
	ACCESS_SECRET_KEY,
	REGION_NAME,
	BUCKET_NAME
} = process.env;


aws.config.update({
	secretAccessKey: ACCESS_SECRET_KEY,
	accessKeyId: ACCESS_KEY_ID,
	region: REGION_NAME
});

const s3 = new aws.S3();

async function createOrUpdate(payloads, filename, version, pgCb) {
  console.log(payloads, filename, version)
  // const params = {
  //   Bucket: BUCKET_NAME, // pass your bucket name
  //   Key: `${filename}/bundles/${version}`,
  //   Body: stream,
  //   CacheControl: "max-age=0"
  // };

  // try {
  //   const response = await s3.upload(params);

  //   console.log(`File uploaded successfully at ${response.Location}`);
  // } catch (err) {
  //   throw "S3 upload failed: "+err;
  // }
}

module.exports = {createOrUpdate};