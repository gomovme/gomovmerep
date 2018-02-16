'use strict';

var request = require('request');
var listSubscriberId = '8cd92e2433';
var listBuyerId = '45b97f87f0'
var dataCenterId = 'us16';
var apiKey = process.env.MAILCHIMP;

var subscribe = function(req, res) {

	var url = 'https://' + dataCenterId + '.api.mailchimp.com/3.0/lists/' + listSubscriberId + '/members/' ;
	
	if (req.body.type && req.body.type === "BUYER") {
		url = 'https://' + dataCenterId + '.api.mailchimp.com/3.0/lists/' + listBuyerId + '/members/' ;
	}
	
	var options = { method: 'POST',
	  	url: url,
	  	headers: {
	    	'Content-Type': req.get('Content-Type'),
	    	'Authorization': 'Basic ' + new Buffer(apiKey).toString('base64')
	  	},
	  	body: { 
	     	email_address: req.body.email,
	     	status: "subscribed"
	    },
	  	json: true
	};

	if (req.body.name && req.body.lastName) {
		options = { method: 'POST',
		  	url: url,
		  	headers: {
		    	'Content-Type': req.get('Content-Type'),
		    	'Authorization': 'Basic ' + new Buffer(apiKey).toString('base64')
		  	},
		  	body: { 
		     	email_address: req.body.email,
		     	status: 'subscribed',
		     	'merge_fields': {
			        'FNAME': req.body.name,
			        'LNAME': req.body.lastName
			    }
		    },
		  	json: true
		};
	}

	request(options, function (error, response, body) {
	  if (error) throw new Error(error);

	  res.send(body);
	});

};

module.exports = subscribe;