var crypto = require('crypto');
var express = require('express');
module.exports = function(app) {
	var users = require('./controllers/user_controller.js');
	app.post('/signup', users.signup);
	app.post('/login', users.login);
}