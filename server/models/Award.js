/*
 * server/models/Award.js
 */
'use strict';

const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

// Schema
const AwardSchema = new mongoose.Schema({
	year: {
		type: Number,
		default: new Date().getFullYear(),
		required: true
	},
	name: {
		type: String,
		unique: true,
		required: true
	}
}, { collection: 'awards' });

// Plugins
AwardSchema.plugin(timestamps);

// Model
module.exports = exports = mongoose.model('award', AwardSchema);
