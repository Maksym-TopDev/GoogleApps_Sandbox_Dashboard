const express = require('express');
const path = require('path');

const app = express();

// midware
app.use(express.static('public'));

// engines
app.set('view engine', 'ejs'); 


//routes
app.get('/altz', (req, res) => {
	res.render('partials/ALTZ-082B/altz');
});
app.get('/rivalry', (req, res) => {
	res.render('partials/RIVALRY/rivalry');
});
app.get('/', (req, res) => {
	res.render('index');
});
app.get('*', (req, res) => {
  res.status(404).json({
    message: 'Invalid route!',
  });
});

// server
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}!`);
});