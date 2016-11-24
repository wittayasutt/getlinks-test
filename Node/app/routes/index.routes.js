module.exports = function (app) {
	var index = require('../controllers/index.controllers');
	app.get('/', index.render);
	app.post('/search', index.render);
}