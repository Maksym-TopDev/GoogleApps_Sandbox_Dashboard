const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const multer  = require('multer');
const upload = multer({ dest: "" });
const {
  zipDataIntoStream,
  getDecryptedData,
  encryptAndPushCode
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
  getProjects,
  getOneProject,
  updateProject,
  createProject 
} = require("./db/pg.js");


//route for index page
app.get("/", async (req, res) => {
  const projects = await getProjects();
  
  res.render("index", {projects});
});

const { createOrUpdate, getOneAndUnzip } = require("./db/s3.js");
app.get("/unzip-decrypt", async (req, res) => {
  const encryption = await getOneAndUnzip(req.query.keyName);
  const secret = await (await getOneProject(req.query.id)).secret_key;

  const decryption = getDecryptedData(encryption, secret);
  res.send(decryption);
});

app.post("/create-project", upload.single('icon'), async (req, res) => {
  const { 
    title,
    description,
    repository,
    projectType,
    website,
    app,
    version
  } = req.body;

  const { 
    encryptedData, 
    secret 
  } = encryptAndPushCode(app);

  try {
    const icon = req.file;
    const project = await zipDataIntoStream(encryptedData);
    
    await createOrUpdate(
      [
        {name: "core", data: project.buffer, type: project.mimetype},
        {name: "icon", data: icon.buffer, type: icon.mimetype}
      ], 
      {
        title,
        description,
        repository,
        projectType,
        website,
        secret,
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

app.put("/update-project", (req, res) => {
  const { s3, pg } = req.body;
  console.log(s3, pg)
  // createProject();
  // createOrUpdate(stream, title, version)
  res.redirect("/")
});

const PORT = process.env.PORT || 8080; 
app.listen(PORT, function () {
  console.log("Server is running on port", PORT);
});