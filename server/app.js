/*
 * server/app.js
 */
'use strict';

// Load modules
var express 			 = require('express');
var mongoose       = require('mongoose');
var restify 			 = require('express-restify-mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var morgan				 = require('morgan');
var fs 						 = require('fs');
var path 					 = require('path');
var requireDir		 = require('require-dir');

// Load configuration
var config = requireDir('./config/', {recurse: true});

// Create an app
var app = {
	config: config,
	dir: __dirname,
	server: express(),
	publicDir: path.join(__dirname, './../public')
};

// Load app modules and controllers
app.m = app.models = requireDir(app.dir + '/models', {recurse: true});
app.c = app.controllers = requireDir(app.dir + '/controllers', {recurse: true});

// Configure middleware
app.server.set('views', path.join(app.publicDir, '/views'));
app.server.set('view engine', 'pug');
// app.server.use(favicon(path.join(app.publicDir, '/favicon.ico')));
app.server.use(morgan('dev'));
app.server.use(methodOverride());
// app.server.use(session({ resave: true,
//                   saveUninitialized: true,
//                   secret: 'uwotm8' }));
app.server.use(bodyParser.json());
app.server.use(bodyParser.urlencoded({ extended: true }));
// app.server.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
// app.server.use(multer());
app.server.use('/', express.static(app.publicDir));
// app.server.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT

// Configure debug
if (!fs.existsSync('./logs')) {
	fs.mkdirSync('./logs')
}
var accessLogStream = fs.createWriteStream(path.join(app.dir, '/logs/access.log'), {flags: 'a'});// Create a stream to append logs
app.server.use(morgan('combined', {stream: accessLogStream}));
app.server.use(morgan('dev'));

// Configure routes
app.router = express.Router();
require('./routes')(app, restify);

// App entrypoint
app.run = function() {
	// Connect to DB
	mongoose.connect(config.db.url) 
	.then(() =>  console.log('DB connection succesful'))
  .catch((err) => console.error(err));
	
	// Start the server
	this.server.use(this.router);
	var port = process.env.PORT || 3000; // set our port
	this.server.listen(port, () => console.log('Server started on port ' + port));
};

exports = module.exports = app;