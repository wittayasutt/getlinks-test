var express = require('express');
var bodyParser = require('body-parser');
var sass = require('node-sass-middleware');

module.exports = function () {
	var app = express();

	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.set('views', './app/views');
	app.set('view engine', 'ejs');
	require('../app/routes/index.routes')(app);
	app.use(sass({
		src: './sass',
		dest: './public/css',
		outputStyle: 'compressed',
		prefix: '/css'
	}));
	app.use(express.static('./public'));
	return app;
}