/*
 * server/routes.js
 */
'use strict';

const path = require('path');

module.exports = function(app, restify) {

	var s = app.server;
	var r = app.router;

	// frontend routes =========================================================
	s.get('/', (req, res) => res.sendfile(path.join(app.publicDir, '/index.html')));
	s.get('/profile', (req, res) => res.sendfile(path.join(app.publicDir, '/index.html')));
	s.get('/travel', (req, res) => res.sendfile(path.join(app.publicDir, '/index.html')));

	// Restify API
	restify.serve(r, app.m.User);	

};