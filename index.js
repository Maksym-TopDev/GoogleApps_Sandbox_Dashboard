const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const multer  = require('multer');
const upload = multer({ dest: "" });

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
    {name: 'Mystic8', version: 'v2', path: '/dist/mystic8_v2.bundle.js'},
    {name: 'Mystic8', version: 'v3', path: '/dist/mystic8_v3.bundle.js'},
    {name: 'Rivalry', version: 'v2', path: '/dist/rivalry_v2.bundle.js'},
    {name: 'Rivalry', version: 'v3', path: '/dist/rivalry_v3.bundle.js'}
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
    app
  } = req.body;
  
  const { stream, secret } = JSON.parse(app);
  const icon = req.file;
  try {  
    await createOrUpdate([
        {type: "data", payload: stream},
        {type: "file", payload: icon}
      ], 
      projectName, 
      version, 
      () => createProject(
        title,
        description,
        repository,
        projectType,
        website,
        secret,
      )
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
  // createOrUpdate(stream, projectName, version)
  res.redirect("/")
});

const PORT = process.env.PORT || 8080; 
app.listen(PORT, function () {
  console.log("Server is running on port", PORT);
});