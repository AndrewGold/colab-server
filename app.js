var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var mongoose = require('mongoose');
require('./models/user_model.js');
var mongoStore = require('connect-mongo')({session: expressSession});
var conn = mongoose.connect('mongodb://AndrewGold:battery@ds061747.mongolab.com:61747/heroku_app34888818');
var app = express();
app.use(bodyParser());
app.use(cookieParser());
app.use(expressSession({
	secret: 'SECRET',
	cookie: {maxAge: 60*60*1000},
	store: new mongoStore({
		url: 'mongodb://AndrewGold:battery@ds061747.mongolab.com:61747/heroku_app34888818',
		collection: 'Sessions'
	})
}));
require('./routes')(app);
app.listen(process.env.PORT || 8080);