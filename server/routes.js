/*
 * server/routes.js
 */
'use strict';

const path = require('path');
const restify = require('express-restify-mongoose');

module.exports = function(app) {

	var s = app.server;

	// frontend routes =========================================================
	s.get('/', (req, res) => res.sendfile(path.join(app.clientDir, '/index.html')));
	s.get('/profile', (req, res) => res.sendfile(path.join(app.clientDir, '/index.html')));
	s.get('/blog', (req, res) => res.sendfile(path.join(app.clientDir, '/index.html')));

	// Restify models
	restify.serve(app.router, app.m.Award);
}