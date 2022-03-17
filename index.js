const express = require('express');
const app = express();

const expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts);
app.use(express.static(__dirname + '/dist'));

//setting view engine to ejs
app.set("view engine", "ejs");

//route for index page
app.get("/", function (req, res) {
  res.render("index");
});

const PORT = process.env.PORT || 8080; 
app.listen(8081, function () {
  console.log("Server is running on port", PORT);
});