var http = require('http');
var module1 = require('./module1');
var module2 = require('./module2');


function sanju(req, response) {
    response.writeHead(200, {'contect-type': 'text/plain'});
    response.write(module2.myveriable);
    module2.mycode();
    response.end();
}




    http.createServer(function(req, response) {
        response.writeHead(200, {'contect-type': 'text/plain'});
        response.write(module2.myveriable);
        module2.mycode();
        response.end();
    }).listen(3000);
