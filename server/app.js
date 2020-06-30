// Load modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const requireDir = require('require-dir');
const rfs = require('rotating-file-stream');
const logger = require("./logger")(__filename);

// Load configuration
const config = requireDir('./config/', {recurse: true});

// Create an app
const app = {
	config: config,
	dir: __dirname,
	server: express(),
	publicDir: path.join(__dirname, './../client/dist/client')
};

// Load app modules and controllers
app.m = app.models = requireDir(app.dir + '/models', {recurse: true});
app.c = app.controllers = requireDir(app.dir + '/controllers', {recurse: true});

// Configure middleware
app.server.set('view engine', 'pug');
app.server.use(methodOverride());
app.server.use(bodyParser.json());
app.server.use(bodyParser.urlencoded({ extended: true }));
app.server.use('/', express.static(app.publicDir));

// Configure HTTP logging
const logDirectory = path.join(__dirname, 'logs');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
const accessLogStream = rfs('access.log', {
	interval: '1d',
	path: logDirectory
});
app.server.use(morgan('combined', {stream: accessLogStream}));
app.server.use(morgan('dev'));

// Configure routes
app.router = express.Router();
require('./routes')(app);

// App entrypoint
app.run = function() {
	// Connect to DB
	mongoose.set('useCreateIndex', true);
	mongoose.connect(config.db.url, { useNewUrlParser: true, useUnifiedTopology: true }) 
	.then(() =>  logger.info('DB connection succesful'))
  	.catch((err) => logger.error(err));
	
	// Start the server
	this.server.use(this.router);
	const port = process.env.PORT || 3000; // set our port
	this.server.listen(port, () => logger.info('Server started on port ' + port));
};

exports = module.exports = app;