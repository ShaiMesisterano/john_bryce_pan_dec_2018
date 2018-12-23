var http = require("http");
var callback = function(request, response) {
    console.log(`Running the callback function`);
    response.writeHead(404, {
        'Content-type': 'text/html'
    });
    response.end("<h1>Hello World</h1>");
}
var port = 3000;
http.createServer(callback).listen(port);
console.log(`Listening to port ${port}`);
var x = 2; // will happen immediately after the last expression
console.log(`x is ${x}`);