var express = require('express');
var rp = require('request-promise');
var jsdom = require('jsdom');
var { JSDOM } = jsdom;

var app = express();

app.get('/', async function(request, response){
    var search = request.query.search;
    var googleResult = await rp(`http://www.google.com/search?q=${search}`);
    var firstResult = getFirstResult(googleResult);
    var content = await rp(`http://www.google.com/${firstResult}`);
    response.end(content);
});

function getFirstResult(body){
    var dom = new JSDOM(body);
    var firstResult = dom.window.document.querySelectorAll("#ires a")[0].href;
    return firstResult;
}

app.listen(3000, function(){
    console.log(`Server is running...`);
});