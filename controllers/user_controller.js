var crypto = require('crypto');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Skill = mongoose.model('Skill');
var skillController = require('../controllers/skill_controller.js');
var Project = mongoose.model('Project');
var projectController = require('../controllers/project_controller.js');
var error = 1;
var success = 0;
var authenticationFailed = 2;

function hashPW(pwd){
  return crypto.createHash('sha256').update(pwd).
         digest('base64').toString();
}
var get = function(id, callback){
	User.findById(id)
	.exec(function(err, user) {
		if (!user) {
			callback(null);
		} else {
			callback(user);
		}
	});
};
exports.getAllUsers = function(req, res) {
	User.find({}).exec(function(err, users) {
		if (users) {
			res.send({
				status:success,
				users:users
			});
		}
	});
};
exports.signup = function(req, res) {
	console.log("signup!");
	console.log(req.body.email);
	console.log(req.body.password);
	var user = new User();
	user.set('email', req.body.email);
	user.set('hashed_password', hashPW(req.body.password));
	user.save(function(err) {
		if (err) {
			console.log('error addding user');
			res.send({status: error});
		} else {
			req.session.user = user.id;
			req.session.email = user.email;
			res.send({
				status: success,
				userId: user.id
			});
		}
	});
};
exports.login = function(req, res) {
	console.log("login!");
	User.findOne({ email: req.body.email})
	.exec(function(err, user) {
		if (!user) {
			res.send({status:authenticationFailed});
		} else if (user.hashed_password === hashPW(req.body.password.toString())) {
			req.session.regenerate(function() {
				req.session.user = user.id;
				req.session.email = user.email;
				res.send({
					status: success,
					userId: user.id
				});
			});
		} else {
			res.send({status:error});
		}
		if (err) {
			res.send({status:error});
		}
	});
};
exports.getUser = function(req, res) {
	get(req.body.user._id, function(user) {
		if (user) {
			res.send({
				status:success,
				user:user
			});
		} else {
			res.send({
				status:error,
				user:null
			});
		}
	});
};
exports.updateUserInfo = function(req, res) {
	get(req.body.user._id, function(user) {
		if (user) {
			if (req.body.user.firstName) {
				user.setFirstName(req.body.user.firstName);
			}
			if (req.body.user.lastName) {
				user.setLastName(req.body.user.lastName);
			};
			if (req.body.user.tagline != null) {
				user.setTagline(req.body.user.tagline);
			}
			if (req.body.user.description != null) {
				user.setDescription(req.body.user.description);
			}
			if (req.body.user.location != null) {
				user.setLocation(req.body.user.location);
			}
			res.send({
				status:success,
				user:user
			});
		}
	});
};
exports.addProject = function(req, res) {
	get(req.body.user._id, function(user) {
		if (user) {
			var skills = [];
			for (var i = 0; i < req.body.skills.length; i++) {
				Skill.findByName(req.body.skills[i], function(err, skill) {
					if (!skill) {
						skillController.addSkill(req.body.skills[i], user, function(err, skill) {
							if (!err) {
								skills.push(skill);
							}
						});
					} else {
						skills.push(skill);
					}
				});
			}
			projectController.addProject(req.body.project.title, req.body.project.description, user, function(err, project) {
				if (!err) {
					user.addProjectToUser(project, skills, function(err, user) {
						for (var i = 0; i < skills.length; i++) {
							if (!user.hasSkill(skills[i])) {
								user.addSkillToUser(skills[i], function(){});
							}
						}
					});
				}
			});
		}
	});
};
exports.get = function(id, callback) {
	get(id, callback);
};