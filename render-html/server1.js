var http = require("http");
var fs = require('fs');

function sanju(request, response) {
response.writeHead(200, {'Contect-type': 'text/html'});
fs.readFile('./index.html', null, function(err,data) {
    if(err){
        response.writeHead(404);
        response.write('file not faund');
    }
    else{
        response.write(data);
    }
    response.end();
});

}


http.createServer(sanju).listen(2000);