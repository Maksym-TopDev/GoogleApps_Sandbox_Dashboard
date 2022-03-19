const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

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
app.post("/create-project", (req, res) => {
  const { s3, pg } = req.body;
  console.log(s3, pg)
  // createProject();
  // createOrUpdate(stream, projectName, version)
  res.redirect("/")
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