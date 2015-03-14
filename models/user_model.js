var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
	firstName: String,
	lastName: String,
	email: {type: String, unique: true},
	hashed_password: String
});
var User = mongoose.model("User", UserSchema);