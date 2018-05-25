/*
 * server/app.js
 */
'use strict';

// Load modules =================================================
var express 			 = require('express');
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var morgan				 = require('morgan');
var fs 						 = require('fs');
var path 					 = require('path');
var requireDir		 = require('require-dir');

// Configuration ===========================================

// config files
var config = requireDir('./config/', {recurse: true});

// Create an app
var app = {
	config: config,
	dir: __dirname,
	server: express(),
	publicDir: __dirname + './../public'
};

// Load modules
app.m = app.models = requireDir(app.dir + '/models', {recurse: true});
app.c = app.controllers = requireDir(app.dir + '/controllers', {recurse: true});

var port = process.env.PORT || 3000; // set our port
// mongoose.connect(config.db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

// get all data/stuff of the body (POST) parameters
app.server.use(bodyParser.json()); // parse application/json 
app.server.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.server.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.server.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.server.use(express.static(app.publicDir)); // set the static files location /public/img will be /img for users

// debug
var accessLogStream = fs.createWriteStream(path.join(app.dir, 'logs/access.log'), {flags: 'a'});// Create a stream to append logs
app.server.use(morgan('combined', {stream: accessLogStream}));
app.server.use(morgan('dev'));

// routes ==================================================
app.routes = require(app.dir + '/routes')(app); // pass our application into our routes

// start app ===============================================
app.run = function() {
	this.server.listen(port);	
	console.log('Server started on port ' + port); 	// shoutout to the user
};

exports = module.exports = app;