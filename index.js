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

//setting view engine to ejs
app.set("view engine", "ejs");

//route for index page
app.get("/", function (req, res) {
  res.render("index", {work: [
    {name: 'Mystic8', version: 'v2', path: '/dist/mystic8_v2.bundle.js'},
    {name: 'Mystic8', version: 'v3', path: '/dist/mystic8_v3.bundle.js'},
    {name: 'Rivalry', version: 'v2', path: '/dist/rivalry_v2.bundle.js'},
    {name: 'Rivalry', version: 'v3', path: '/dist/rivalry_v3.bundle.js'}
  ]});
});

app.post("/update-bucket", (req, res) => {
  console.log(req.body)
  
  res.redirect("/")
});

const PORT = process.env.PORT || 8080; 
app.listen(PORT, function () {
  console.log("Server is running on port", PORT);
});