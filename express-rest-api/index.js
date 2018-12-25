var express = require('express');

var app = express();

app.get('/users', function(request, response){
    console.log(`GET users result`);
    response.end();
});

app.post('/users', function(request, response){
    console.log(`POST users result`);
    response.end();
});

app.put('/users', function(request, response){
    console.log(`PUT users result`);
    response.end();
});

app.delete('/users', function(request, response){
    console.log(`DELETE users result`);
    response.end();
});

app.listen(3000, function(){
    console.log(`Server is running`);
});