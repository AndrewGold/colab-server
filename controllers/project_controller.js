var mongoose = require('mongoose');
var User = mongoose.model('User');
var userController = require('../controllers/user_controller.js');
var Skill = mongoose.model('Skill');
var skillController = require('../controllers/skill_controller.js');
var Project = mongoose.model('Project');
var error = 1;
var success = 0;

exports.addProject = function(req, res) {
	var user = userController.getUser(req.body.email);
	if (user) {
		var project = new Project();
		project.set('title', req.body.project);
		project.set('description', req.body.description);
		project.users.push(user);
		project.set('owner', user);
		project.save(function(err) {
			if (err) {
				res.send({status:error});
			} else {
				res.send({status:success});
			}
		});
	}
}