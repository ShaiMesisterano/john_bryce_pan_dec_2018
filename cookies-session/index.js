var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

app.use(cookieParser());
app.use(session({secret: "abcd1234"}));

app.get('/', function(request, response){
    response.cookie('username', 'shai');
    // response.send("Cookies:" + JSON.stringify(request.cookies.username));

    request.session.username = "shai";
    response.end("Session:" + JSON.stringify(request.session) + "\n\nCookies" + JSON.stringify(request.cookies));
});

app.listen(3000, function(){
    console.log(`Server is running...`);
})