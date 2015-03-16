var crypto = require('crypto');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Skill = mongoose.model('Skill');
var skillController = require('../controllers/skill_controller.js');
var Project = mongoose.model('Project');
var error = 1;
var success = 0;

function hashPW(pwd){
  return crypto.createHash('sha256').update(pwd).
         digest('base64').toString();
}
function get(email){
	User.findOne({ email: req.body.email })
	.exec(function(err, user) {
		if (!user) {
			return null;
		} else {
			return user;
		}
	});
};
exports.signup = function(req, res) {
	var user = new User();
	user.set('email', req.body.email);
	console.log(req.body.email);
	user.set('hashed_password', hashPW(req.body.password));
	console.log(req.body.password);
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
	User.findOne({ email: req.body.email})
	.exec(function(err, user) {
		if (!user) {
			res.send(authenticationFailed);
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
		};
	});
};
exports.getUser = function(req, res) {
	var user = get(req.body.email);
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
};
