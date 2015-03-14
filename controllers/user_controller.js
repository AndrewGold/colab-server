var crypto = require('crypto');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var unableToAddUser = 1;
var authenticationFailed = 2;
var databaseError = 3;
var userNotFound = 4;
var success = 0;

function hashPW(pwd){
  return crypto.createHash('sha256').update(pwd).
         digest('base64').toString();
}
exports.signup = function(req, res) {
	var user = new User();
	user.set('email', req.body.email);
	console.log(req.body.email);
	user.set('hashed_password', hashPW(req.body.password));
	console.log(req.body.password);
	user.save(function(err) {
		if (err) {
			console.log('error addding user');
			res.send({status: unableToAddUser});
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
			res.send({status:authenticationFailed});
		}
		if (err) {
			res.send({status:databaseError});
		};
	});
};
exports.getUserProfile = function(req, res) {
	User.findOne({ email: req.body.email })
	.exec(function(err, user) {
		if (!user) {
			res.send({status:userNotFound});
		} else {
			res.json(user);
		}
	});
};