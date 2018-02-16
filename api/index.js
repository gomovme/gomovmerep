'use strict';

var api = require('express').Router();
var charge = require('../api/models/charge');
var subscribe = require('../api/models/subscribe');

api.get('/', function(req, res) {
	res.status(200).json({message: 'Connected to Movme API'});
});

// Charges using the Iugu API and method credit card or bank slip
api.post('/charge', charge);

// Subscribes email to Mailchimp
api.post('/subscribe', subscribe);

module.exports = api;