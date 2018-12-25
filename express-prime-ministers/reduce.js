var express = require('express');
var app = express();

var primeMinisters = require('./primeMinisters');

// var arr = [1,3,7,20];
// var result = arr.reduce(function(acc,item){
//     acc = acc + item;
//     return acc;
// }, 0);

// var arr = [1,3,7,20];
// var result = arr.reduce(function(acc,item){
//     acc.push({x: item * 2});
//     return acc;
// }, []);

// console.log(result);

app.get('/primeMinisters/csv', function(request, response) {
    var result = primeMinisters.reduce(function(acc, primeMinister){
        acc += primeMinister.name.first + " " + primeMinister.name.last + ",";
        return acc;
    }, "");
    response.end(JSON.stringify(result,null, 4));
});

app.listen(3000, function(){
    console.log(`Server is running`);
});