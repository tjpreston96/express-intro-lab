const express = require('express');
const path = require('path');

// create express app

const app = express();

// configure the app(app.set)

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

// Mount routes
app.get('/', function(req, res) {
    res.send('<h1>Hello Express</h1>');
});

app.get('/home', function(req, res) {
    res.render('home');
});



// Tell the app to listen on port 3000
app.listen(3000, function() {
    console.log('Listening on port 3000');
  });