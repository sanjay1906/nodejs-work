var http = require("http");

function sanju(request, response) {
response.writeHead(200, {'Contect-type': 'text/plain'});
response.write("hello world!");
response.end();
}


http.createServer(sanju).listen(2000);