const express = require('express');
const path = require('path');

// create express app

const app = express();

// configure the app(app.set)

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));



