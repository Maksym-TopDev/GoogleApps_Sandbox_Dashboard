const aws = require("aws-sdk");
const unzipper = require("unzipper");

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

async function createOrUpdate(files, fields, pgCb) {
  const {
    title,
    description,
    repository,
    projectType,
    website,
    secret,
    version
  } = fields;  
  
  let errMsg = [];
  files.forEach(file => {
    const corePath = file.name === "core" && `${title}/${version}`;
    const iconPath = file.name === "icon" && `${title}/media/${file.name}`;
    
    s3.upload({
      Bucket: BUCKET_NAME, // pass your bucket name
      Key: corePath || iconPath,
      Body: file.data,
      ContentType: file.type,
      CacheControl: "max-age=0"
    }, function(err, data) {
      console.log("PRINT FILE:", file);
      if (err) {
        errMsg.push(err)
      } else {
        console.log('Successfully uploaded data', data);
      }
    });
  });

  if (errMsg.length) throw errMsg;

  const response = await pgCb({
    app_type: projectType, 
    deployed_url: website, 
    description, 
    game_file: (files[0]?.data) ? `${S3_ROOT_URL}/${title}/${version}` : null, 
    git_url: repository, 
    icon_file: (files[1]?.data) ? `${S3_ROOT_URL}/${title}/${files[1].name}` : null, 
    secret_key: secret, 
    title,
    version
  });

  if (!response) throw response;
}

function getOneAndUnzip(keyName) {
  return new Promise(function (resolve, reject) {
    s3
      .getObject({ Bucket: BUCKET_NAME, Key: keyName })
      .createReadStream()
      .on("error", (e) => reject(`Error extracting file: `, e))
      .pipe(unzipper.Parse())
      .on("entry", async function (data) {
        const unzippedBuff = await data.buffer();
        const encryptedContent = await unzippedBuff.toString('utf8')

        resolve(encryptedContent);
      });
  });
}

module.exports = {
  createOrUpdate,
  getOneAndUnzip
};
