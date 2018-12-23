var http = require('http');
var request = require('request');

http.createServer(function (req, res) {
    var output;
    request('http://www.google.com', function (error, response, body) {
        if (error) return console.error(error);
        output = body;
        request('http://www.paloaltonetworks.com', function (error2, response2, body2) {
            if (error2) return console.error(error2);
            output += body2;
            res.end(output);
        });
    });
}).listen(8000);