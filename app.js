'use strict';

// Instances
var app, server,
  express = require('express'),
  port = process.env.PORT || 8080,
  path = require('path').join(__dirname, './public');

var bodyParser = require('body-parser');

// Env Vars
var dotenv = require('dotenv');
var result = dotenv.config()

if (result.error) {
  throw result.error
}

// API Routes
var api = require('./api');

// Express
app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// Front Routes
app.use(express.static(path));

app.use(function (req, res, next) {
  
  var allowedOrigins = ['http://gomovme.com', 'https://gomovme.com', 'http://www.gomovme.com', 'https://www.gomovme.com'];
  var origin = req.headers.origin;
  if(allowedOrigins.indexOf(origin) > -1){
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');

	if (req.originalUrl.substring(0 ,4) !== '/api') {
		res.redirect('/#' + req.originalUrl);
	} else {
		next();
	}

});

// API Routes
app.use('/api', api);

// Server
server = app.listen(port, serving);	

// Server Callback
function serving() {
  console.log('App listening on port', port);
  console.log('Press Ctrl+C to quit.');
}
