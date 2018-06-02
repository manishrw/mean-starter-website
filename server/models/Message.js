/*
 * server/models/Message.js
 */
'use strict';

const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

// Schema
const MessageSchema = new mongoose.Schema({
	name: {
		type: String,
		default: '',
		required: true,
		index: true
	},
	email: {
		type: String,
		required: true
	},
	phone: {
		type: Number,
		required: true
	},
	message: {
		type: String,
		required: true
	}
}, { collection: 'messages' });

// Plugins
MessageSchema.plugin(timestamps);

// Model
module.exports = exports = mongoose.model('Message', MessageSchema);
