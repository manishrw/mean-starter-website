/*
 * server/models/User.js
 */
'use strict';

const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

// Schema
const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		unique: true,
		required: true
	}
}, { collection: 'users' });

// Plugins
UserSchema.plugin(timestamps);

// Model
module.exports = exports = mongoose.model('user', UserSchema);
