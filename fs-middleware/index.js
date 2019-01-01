const express = require('express');
const fs = require('fs');

const app = express();

app.use('/', function(req, res, next){
    fs.appendFile('log.txt', JSON.stringify(req.query), function(){
        console.log('file was written');
    });
    next();
});

app.use('/', function(req, res, next){
    console.log(req.query);
    next();
});

app.get('/', function(req, res){
    console.log('ok');
    res.end('Success');
});

app.listen(3000, function(){
    console.log('server is running on port 3000');
})