const express = require('express');
const path = require('path');
const projectsDb = require('./data/projects-db')

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
app.use(express.static('css'));

app.get('/', function(req, res) {
    res.render('home', { title: 'Home'});
});

app.get('/projects', function(req, res) {
    res.render('projects', {projects: projectsDb.getAll()})
});

//=========================================================
//                   Redirects
//=========================================================
app.get('/home', (req, res) => {
    res.redirect('/');
});

app.get('/linkedin', (req, res) => {
    res.redirect('https://www.linkedin.com/in/tylerjpreston/');
});

app.get('/github', (req, res) => {
    res.redirect('https://github.com/tjpreston96');
});



//=========================================================
//                    404 Page
//=========================================================
app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
});