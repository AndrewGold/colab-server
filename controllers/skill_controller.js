var mongoose = require('mongoose');
var User = mongoose.model('User');
var userController = require('../controllers/user_controller.js');
var Skill = mongoose.model('Skill');
var Project = mongoose.model('Project');
var error = 1;
var success = 0;

exports.addSkill = function(req, res) {
	var skill = new Skill();
	skill.set('title', req.body.skill);
	skill.users = [];
	skill.save(function(err) {
		if (err) {
			console.log('error adding skill');
			res.send({status: error});
		} else {
			res.send({status:success});
		}
	});
};
exports.addUserToSkill = function(req, res) {
	Skill.findOne({title:req.body.skill})
	.exec(function(err, skill) {
		if (!skill) {
			res.send({status:error});
		} else {
			var user = userController.getUser(req.body.email);
			if (user) {
				skill.users.push(user);
				res.send({status:success});
			} else {
				res.send({status:error});
			}
		}
	});
};
exports.getSkill = function(req, res) {
	Skill.findOne({ title:req.body.skill })
	.exec(function(err, skill) {
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
	Skill.find({}).exec(function(err, result) {
		if (!err) {
			res.send({
				status:success,
				skills: result
			});
		} else {
			res.send({
				status:error,
				skills:[]
			});
		}
	});
};