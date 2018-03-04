var http = require('http');
var debug = require('debug');
var config = require('./config/config');
var logger = require('./log');

import app from './App';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.set('port', process.env.PORT || 3109);

if(process.env.NODE_ENV.trim() == "production" || process.env.NODE_ENV.trim() == "development") {
  logger.warn("NODE_ENV: " + process.env.NODE_ENV);
  logger.warn("APLICATION PARAMETERS: \n"+JSON.stringify(config));
}

app.listen(app.get('port'), function(){
	logger.warn("START APLICATION - PORT: " + app.get('port'));
});
