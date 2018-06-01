const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

// define our model
const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		default: '',
		required: true
	},
	email: {
		type: String,
		unique: true,
		required: true
	}
}, { collection: 'users' });

UserSchema.plugin(timestamps);

module.exports = exports = mongoose.model('User', UserSchema);
