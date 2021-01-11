// external dependencies
const path = require('path')
const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const handlebars = require('express-handlebars')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const passport = require('passport')

// internal dependencies
const auth = require('./auth')
const routes = require('./routes')
const config = require('./config')

module.exports = app => {
    // setup cors
    app.use(cors({
        origin: "http://localhost:8081"
    }));

    // set path to views directory 
    app.set('views', path.join(__dirname, '/views'))

    // configure handlebars 
    app.engine('hbs', handlebars({
        layoutsDir: path.join(__dirname, '/views/layouts'),
        partialsDir: path.join(__dirname, '/views/partials'),
        extname: 'hbs',
    }));

    // sets app to use the handlebars engine
    app.set('view engine', 'hbs');

    // parse requests of content-type - application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }));

    // parse requests of content-type - application/json
    app.use(bodyParser.json());

    // serves static files
    app.use(express.static(__dirname + '/public'))

    // configure session
    app.use(session({
        key: 'user_sid',
        secret: '535510N__53CR37',
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 3600000
        }
    }));

    // setup passport
    app.use(passport.initialize());
    app.use(passport.session());
    auth(passport)
    
    // attach router
    routes(app, passport);

    // set port 
    const PORT = process.env.CLIENT_PORT || config.port;

    // start app, listen for requests
    app.listen(PORT, () => {
        console.log("Client listening on localhost:" + PORT);
    })
}