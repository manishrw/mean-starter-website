requireDir = require('require-dir');

module.exports = function(app) {

	// server routes ===========================================================
	// API calls
	// app.server.get()
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.server.get('*', function(req, res) {
		res.sendfile(app.publicDir + '/index.html');
	});

};