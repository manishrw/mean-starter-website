/*
 * server/routes.js
 */
'use strict';

const path = require('path');
const restify = require('restify-mongoose');

module.exports = function(app) {

	var s = app.server;
	//var r = app.router;

	// frontend routes =========================================================
	s.get('/', (req, res) => res.sendfile(path.join(app.publicDir, '/index.html')));
	s.get('/profile', (req, res) => res.sendfile(path.join(app.publicDir, '/index.html')));
	s.get('/travel', (req, res) => res.sendfile(path.join(app.publicDir, '/index.html')));

	// Restify models
	var users = restify(app.m.User);
	var messages = restify(app.m.Message);

	// Restify API
	s.get('/api/users', users.query());
	s.get('/api/users/:id', users.detail());
	s.post('/api/users', users.insert());
	s.patch('/api/users/:id', users.update());
	s.delete('/api/users/:id', users.remove());

	s.get('/api/messages', messages.query());
	s.get('/api/messages/:id', messages.detail());
	s.post('/api/messages', messages.insert());
};