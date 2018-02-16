'use strict';

var request = require('request');
var apiKey = process.env.IUGU;

var charge = function(req, res) {

	var options = { method: 'POST',
	  	url: 'https://api.iugu.com/v1/charge',
	  	headers: {
	    	'Content-Type': req.get('Content-Type'),
	    	'Authorization': 'Basic ' + new Buffer(apiKey).toString('base64')
	  	},
	  	body: req.body,
	  	json: true
	};

	request(options, function (error, response, body) {
	  if (error) throw new Error(error);

	  res.send(body);
	});

};

module.exports = charge;