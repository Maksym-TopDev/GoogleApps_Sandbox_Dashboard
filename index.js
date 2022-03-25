const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const multer  = require('multer');
const upload = multer({ dest: "" });
const {
  zipDataIntoStream
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
  updateProject,
  createProject 
} = require("./db/pg.js");


//route for index page
app.get("/", async (req, res) => {
  // const projects = await getProjects();
  // console.log(projects)
  res.render("index", {work: [
    {name: 'Mystic8', version: 'v2'},
    {name: 'Mystic8', version: 'v3'},
    {name: 'Rivalry', version: 'v2'},
    {name: 'Rivalry', version: 'v3'}
  ]});
});

const { createOrUpdate } = require("./db/s3.js");
app.post("/create-project", upload.single('icon'), async (req, res) => {
  const { 
    title,
    description,
    repository,
    projectType,
    website,
    app,
    secret,
    version
  } = req.body;
  
  const icon = req.file;
  const project = await zipDataIntoStream(app);
  
  try {  
    await createOrUpdate([
        {name: "logic", data: project.buffer, type: project.mimetype},
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
    console.log(err)
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