var mongoose = require('mongoose');
var User = mongoose.model('User');
var userController = require('../controllers/user_controller.js');
var Skill = mongoose.model('Skill');
var skillController = require('../controllers/skill_controller.js');
var Project = mongoose.model('Project');
var error = 1;
var success = 0;

var get = function(id, callback) {
	Project.findById(id)
	.exec(function(err, project) {
		if (!skill) {
			callback(null);
		} else {
			callback(project);
		}
	});
}
exports.addProject = function(title, description, owner, callback) {
	userController.getUser(req.body.user._id, function(user){
		if (user) {
			var project = new Project();
			project.set('title', title);
			project.set('description', description);
			project.users.push(owner);
			project.set('owner', owner);
			project.save(callback);
		}
	});
};
