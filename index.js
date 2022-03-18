const express = require('express');
const app = express();

const expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts);
// app.use(express.static(__dirname + '/dist'));
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

const PORT = process.env.PORT || 8080; 
app.listen(8081, function () {
  console.log("Server is running on port", PORT);
});