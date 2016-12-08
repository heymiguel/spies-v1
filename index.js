var express = require('express');
var app = express();
var passport = require('passport');
// var requireLogin = require('./require_login');

var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/spies');
mongoose.Promise = require('bluebird');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

// BEGIN AUTHENTICATION BLOCK
var User = require('./api/users/model');
passport.use(User.createStrategy());


//bring in express session
var session = require('express-session');
// HAVE A LEGIT PASSWORD INSIDE THE SECRET PROPERTY
app.use(session({secret: 'bloof', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.post('/api/login', passport.authenticate('local'), function(req,res){
	res.send(req.user);
	// req.user always represents the user. this is from passport.
});

app.post('/api/signup', function(req, res, next) {
  var user = new User();
  user.email = req.body.email;
  user.name = req.body.name;
  User.register(user, req.body.password, (err) => {
    if (err) { next(err); }
    req.login(user, function(err) {
      if (err) { next(err); }
      res.send(user);
    })
  })
});


// END AUTHENTICATION BLOCK

// Serve bundle.js
app.use(webpackMiddleware(webpack(require('./webpack.config.js'))));

// Serve your API assets here. You'll need to include the post route file.
app.use(express.static('public'));

// Serve your static assets here. You'll need to use express.static middleware.
app.use('/api/character', require('./api/character'));
require('./api/users/model');

// If none of the above matches, serve public/index.html.
app.get('*', (req, res) => res.sendFile(__dirname + '/public/index.html'))

app.listen(8080);
