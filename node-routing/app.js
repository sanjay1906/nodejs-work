var url = require('url');
var fs = require('fs');

function renderHtml(path, res) {
    fs.readFile(path, null, function(err,data) {
        if(err){
            res.writeHead(404);
            res.write('file not faund');
        }
        else {
            res.write(data);
        }
        res.end();
    });
}


module.exports = {
    hendelRequast: function(req,res) {
        res.writeHead(200, {'contect-type': 'text/html'});

        var path = url.parse(req.url).pathname;
        switch (path) {
            case '/':
                renderHtml('./index.html', res);
                break;
            case '/login':
                renderHtml('./login.html', res);
                break;
            case '/sign':
                renderHtml('./sign.html', res);
                break;
            default:
                res.writeHead(404);
                res.write('route not defined');
                res.end();
        }
    }
};