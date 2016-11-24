exports.render = function (req, res) {
	res.render('index', {
		'title': 'GetLinks Frontend Developer Test',
		'getlinks_pic': 'https://res.cloudinary.com/getlinks/image/upload/v1462602715/d7uu1fp7nosezj9zakiz.jpg'
	});
}