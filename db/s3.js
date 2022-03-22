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

function createOrUpdate(fields, payloads, pgCb) {
  console.log(fields, payloads)
  const {
    title,
    description,
    repository,
    projectType,
    website,
    secret,
    version
  } = payloads;

  try {
    fields.forEach(async field => {
      const logicPath = field.name === "logic" && `${title}/${version}/${field.name}`;
      const iconPath = field.name === "icon" && `${title}/media/${field.name}`;
console.log(logicPath || iconPath)
      // const response = await s3.upload({
      //   Bucket: BUCKET_NAME, // pass your bucket name
      //   Key: logicPath || iconPath,
      //   Body: field.data,
      //   CacheControl: "max-age=0"
      // });

      // console.log(`File uploaded successfully at ${response.Location}`);

      // await pgCb({
      //   app_type: projectType, 
      //   deployed_url: website, 
      //   description, 
      //   game_file: (logicPath) ? BUCKET_NAME+"/"+logicPath : null, 
      //   git_url: repository, 
      //   icon_file: (iconPath) ? BUCKET_NAME+"/"+iconPath : null, 
      //   secret_key: secret, 
      //   title,
      //   version
      // });
    });
  } catch (err) {
    throw "S3 upload failed: "+err;
  }
}

module.exports = {createOrUpdate};