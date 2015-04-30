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
	skills: [Schema.Types.ObjectId],
	tagline: String,
	description: String,
	location: String,
	image: Schema.Types.ObjectId
});

UserSchema.methods.addSkillToUser = function(skill, callback) {
	this.skills.push(skill);
	this.save(callback);
}
UserSchema.methods.addProjectToUser = function(project, skills, callback) {
	this.projects.push({
		project: project,
		skills: skills
	});
	this.save(callback);
}
UserSchema.methods.setTagline = function(tagline) {
	this.set("tagline", tagline);
	this.save();
}
UserSchema.methods.setDescription = function(description) {
	this.set("description", description);
	this.save();
}
UserSchema.methods.setLocation = function(location) {
	this.set("location", location);
	this.save();
}
UserSchema.methods.hasSkill = function(skill) {
	for (var i = 0; i < this.skills.length; i++) {
		if (this.skills[i].title == skill.title) {
			return true;
		} 
	}
	return false;
}


var User = mongoose.model("User", UserSchema);