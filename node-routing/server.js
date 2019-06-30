var http = require('http');
var app = require('./app');

http.createServer(app.hendelRequast).listen(5000);