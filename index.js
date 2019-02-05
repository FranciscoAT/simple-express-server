// Node module requires
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// Some defaults
const app = express();
const port = 3000;

// View Engine
app.engine('hbs', exphbs({
    defaultLayout: 'default',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Set the public directory
app.use(express.static('public'));

// Basic requests
app.get('/', (req, res) => {
    var range = [1, 10]
    var randNum = Math.floor((Math.random() * range[1]) + range[0]);
    res.render('landing', {
        randNum: randNum,
        range: range
    });
});


//Running the server
app.listen(port, (err) => {
    if (err) {
        return console.log("Something went wrong", err);
    }
    console.log(`Now listening on port ${port}, go to http://localhost:${port}`);
});
