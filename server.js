const express = require('express');
const path = require('path');

//=========================================================
//                create express app
//=========================================================
const app = express();

//=========================================================
//             configure the app(app.set)
//=========================================================
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

//=========================================================
//          Tell the app to listen on port 3000
//=========================================================
app.listen(3000, function() {
    console.log('Listening on port 3000');
});

//=========================================================
//      Mount routes ---- middleware & static files
//=========================================================
app.get('/', function(req, res) {
    res.render('home', { title: 'Home'});
});

app.get('/github', function(req, res) {
    res.render('github', { title: 'Github'});
});

app.get('/projects', function(req, res) {
    res.render('projects', { title: 'Projects'});
});

//=========================================================
//                   Redirects
//=========================================================
app.get('/home', (req, res) => {
    res.redirect('/');
});

//=========================================================
//                    404 Page
//=========================================================
app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
});