var request = require("request");

exports.render = function (req, res) {
	var info;
	var options = {
		url: 'https://api.github.com/users/'+req.body.name+'/followers',
		headers: {
		'User-Agent': 'request'
		}
	};
	function callback(error, response, body) {
		if (!error && response.statusCode == 200) {
			info = JSON.parse(body);
			res.render('index', {
				'title': 'Node skill test',
				'info': info
			});
		}
	}
	if(req.body.name){
		request(options, callback);
	} else {
		res.render('index', {
			'title': 'Node skill test',
			'info': []
		});
	}
}