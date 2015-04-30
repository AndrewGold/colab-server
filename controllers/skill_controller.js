var mongoose = require('mongoose');
var User = mongoose.model('User');
var userController = require('../controllers/user_controller.js');
var Skill = mongoose.model('Skill');
var Project = mongoose.model('Project');
var error = 1;
var success = 0;

var get = function(id, callback) {
	Skill.findById(id)
	.exec(function(err, skill) {
		if (!skill) {
			callback(null);
		} else {
			callback(skill);
		}
	});
};
exports.addSkill = function(title, user, callback) {
	var skill = new Skill();
	skill.set('title', title);
	skill.users.push(user);
	skill.save(callback);
};
exports.addUserToSkill = function(req, res, callback) {
	var skill = get(req.body.skill);
	if (!skill) {
		callback(error);
	} else {
		var user = userController.get(req.body.user._id, function(user) {
			if (user) {
				skill.users.push(user);
				skill.save(callback);
			} else {
				callback(error);
			}
		});
	}
};
exports.getSkill = function(req, res) {
	get(req.body.skill, function(skill) {
		if (!skill) {
			res.send({status:error});
		} else {
			res.send({
				status: success,
				skillId: skill.id,
				skill: skill.title
			});
		}
	});
};
exports.getAllSkills = function(req, res) {
	console.log("finding skills");
	Skill.find({}).exec(function(err, result) {
		if (!err) {
			console.log(result);
			res.send({
				skills: result
			});
		} else {
			console.log(err);
			res.send({
				skills:[]
			});
		}
	});
};
exports.get = function(id, callback) {
	get(id, callback);
}