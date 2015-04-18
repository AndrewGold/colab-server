var crypto = require('crypto');
var express = require('express');
var users = require('./controllers/user_controller.js');

module.exports = function(app) {
	app.post('/signup', users.signup);
	app.post('/login', users.login);
}