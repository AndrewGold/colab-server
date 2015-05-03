var crypto = require('crypto');
var express = require('express');
var users = require('./controllers/user_controller.js');
var skills = require('./controllers/skill_controller.js');

module.exports = function(app) {
	app.post('/signup', users.signup);
	app.post('/login', users.login);
	app.get('/getUser', users.getUser);
	app.post('/updateUserInfo', users.updateUserInfo);
	app.post('/addProject', users.addProject);
	app.get('/getAllSkills', skills.getAllSkills);
	app.get('/getAllUsers', users.getAllUsers);
}