const aws = require("aws-sdk");

require("dotenv").config();
const { 
	ACCESS_KEY_ID,
	ACCESS_SECRET_KEY,
	REGION_NAME,
	BUCKET_NAME,
  S3_ROOT_URL
} = process.env;


aws.config.update({
	secretAccessKey: ACCESS_SECRET_KEY,
	accessKeyId: ACCESS_KEY_ID,
	region: REGION_NAME
});

const s3 = new aws.S3();

async function createOrUpdate(fields, payloads, pgCb) {
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
    let errMsg = [];
    fields.forEach(async field => {
      const logicPath = field.name === "logic" && `${title}/${version}`;
      const iconPath = field.name === "icon" && `${title}/media/${field.name}`;
      
      const response = await s3.upload({
        Bucket: BUCKET_NAME, // pass your bucket name
        Key: logicPath || iconPath,
        Body: field.data,
        ContentType: field.type,
        CacheControl: "max-age=0"
      });

      if (!response.location) {
        errMsg.push(response)
        return;
      }

      console.log(`File uploaded successfully at ${response}`);
    });

    if (errMsg.length) throw errMsg;

    await pgCb({
      app_type: projectType, 
      deployed_url: website, 
      description, 
      game_file: (fields[0]?.data) ? `${S3_ROOT_URL}/${title}/${version}` : null, 
      git_url: repository, 
      icon_file: (fields[1]?.data) ? `${S3_ROOT_URL}/${title}/media/${field.name}` : null, 
      secret_key: secret, 
      title,
      version
    });
  } catch (err) {
    throw "S3 upload failed: "+err;
  }
}

module.exports = {createOrUpdate};