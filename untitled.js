var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var mongoStore = require('connect-mongo')({session: expressSession});
var conn = mongoose.connect('mongodb://AndrewGold:battery@ds061747.mongolab.com:61747/heroku_app34888818');
var app = express();
app.use(cookieParser());
app.use(expressSession({
	secret: 'SECRET',
	cookie: {maxAge: 60*60*1000},
	store: new mongoStore({
		db: mongoose.connection.db,
		collection: 'sessions'
	})
}));
app.listen(process.env.PORT || 8080);