const express = require('express')
, massive = require('massive')
, bodyParser = require('body-parser')
, cors = require('cors')
, dotenv = require('dotenv').config()
, session = require('express-session')
, passport = require('passport')
, Auth0Strategy = require('passport-auth0')
, axos = require('axios');

const app = express();
app.use(bodyParser.json());
var jsonParser = bodyParser.json()
app.use(cors());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());





