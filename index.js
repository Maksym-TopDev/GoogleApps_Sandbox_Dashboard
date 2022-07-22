const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const glob = require('glob');
const multer  = require('multer');
const upload = multer({ dest: "" });
const {
  zipDataIntoStream,
  getDecryptedData,
  encryptAndPushCode,
  determineAndGetChanges
} = require('./lib/main.js');

// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

app.use("/dist", express.static(__dirname + '/dist'));
app.use("/public", express.static(__dirname + '/public'));

//setting view engine to ejs
app.set("view engine", "ejs");

const {   
  getOneProject,
  updateProject,
  createProject 
} = require("./db/pg.js");


//route for index page
app.get("/", async (req, res) => {
  switch (process.argv[2]) {
    case "projects": 
      const work = (await new Promise(function (resolve, reject) {
        glob("./dist/projects/**/*", function (err, res) {
          if (err) reject(err);
    
          resolve(res)
        })
      })).flatMap(path => {
        const dirPartials = path.split("/");
        if (dirPartials.length === 5) {
          const version = dirPartials[dirPartials.length-1].split(".")[0];
          if (version === "v3") {
            return {
              title: dirPartials[3],
              version,
              fullPath: path
            }
          }
          return [];
        }
        return [];
      });
    
      res.render("projects/index", {work});
      break;
    case "challenge":
      res.render("challenge/index");
      break;
  }
  
});

app.get("/get-project", async (req, res) => {
  try {
    const { title, version } = req.query;
    const project = await getOneProject(title, version);

    res.json(project);
  } catch(err) {
    console.log(err);

    res.redirect("/");
  }
});

const { createOrUpdate, getOneAndUnzip } = require("./db/s3.js");
app.get("/unzip-decrypt", async (req, res) => {
  const { title, version, keyName } = req.query;
  try {
    const encryption = await getOneAndUnzip(keyName);
    const secret = await (await getOneProject(title, version)).secret_key;
    const decryption = getDecryptedData(encryption, secret);
    res.send(decryption);
  } catch (err) {
    console.log(err);

    res.redirect("/");
  }
});

app.post("/create-project", upload.fields([
  { name: 'icon', maxCount: 1 }, 
  { name: 'app', maxCount: 1 }
]), async (req, res) => {
  const { 
    title,
    description,
    repository,
    projectType,
    website,
    version
  } = req.body;

  const {icon, app} = req.files;

  try {
    const { 
      encryptedData, 
      secret_key
    } = await encryptAndPushCode(app);
    const project = await zipDataIntoStream(encryptedData);
    
    await createOrUpdate(
      [
        {name: "core", data: project.buffer, type: project.mimetype},
        {name: "icon", data: icon[0].buffer, type: icon[0].mimetype}
      ], 
      {
        title,
        description,
        repository,
        projectType,
        website,
        secret_key,
        version
      },
      createProject
    );
  } catch (err) {
    console.log("Error at create proj:", err);
  } finally {
    res.redirect("/");
  }
});

app.post("/update-project", upload.fields([
  { name: 'icon', maxCount: 1 }, 
  { name: 'app', maxCount: 1 }
]), async (req, res) => {
  const projectId = req.body.id;

  try {
    const {
      filesArrayIfExist, 
      acceptedFields
    } = await determineAndGetChanges(req.files, req.body, encryptAndPushCode, zipDataIntoStream);
    acceptedFields.id = parseInt(projectId);

    if (!!filesArrayIfExist.length) {
      await createOrUpdate(filesArrayIfExist, acceptedFields, updateProject);
    } else {
      await updateProject(acceptedFields);
    }
  } catch (err) {
    console.log(err)
  } finally {
    res.redirect("/");
  }
});

const PORT = process.env.PORT || 8080; 
app.listen(PORT, function () {
  console.log("Server is running on port", PORT);
});