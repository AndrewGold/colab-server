var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
	firstName: String,
	lastName: String,
	email: {type: String, unique: true},
	hashed_password: String,
	projects: [{
		project: Schema.Types.ObjectId,
		skills: [Schema.Types.ObjectId]
	}],
	tagline: String,
	description: String,
	location: String,
	image: Schema.Types.ObjectId
});
var User = mongoose.model("User", UserSchema);