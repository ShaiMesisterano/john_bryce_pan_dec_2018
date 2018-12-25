var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// app.get('/users', function(request, response){
//     console.log(`GET users result`);
//     console.log(`COUNTRY: ${request.query.country}`);
//     console.log(`ID: ${request.query.id}`);
//     response.end();
// });

app.get('/users/:userId/articles/:articleId', function(request, response){
    console.log(`GET users result`);
    console.log(`COUNTRY: ${request.params.userId}`);
    console.log(`ID: ${request.params.articleId}`);
    response.end();
});

// app.post('/users', function(request, response){
//     console.log(`POST users result`);
//     response.end();
// });

app.post('/users', function(request, response){
    console.log(`POST users result`);
    console.log(`USER_ID: ${request.body.userId}`);
    console.log(`ARTICLE_ID: ${request.body.articleId}`);
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