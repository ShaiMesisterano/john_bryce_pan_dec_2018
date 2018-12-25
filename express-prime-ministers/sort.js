var express = require('express');
var app = express();

var primeMinisters = require('./primeMinisters');

// var arr = [10, 3, 6, 1, 2];
// var result = arr.sort(function(a,b){
//     return a - b;
// });
// console.log(result);

app.get('/primeMinisters/contains/:letter', function(request, response) {
    var result = primeMinisters.filter( function(primeMinister){
        var letter = request.params.letter;
        return primeMinister.name.first.indexOf(letter) > -1 || 
            primeMinister.name.last.indexOf(letter) > -1;
    });
    var sorted = primeMinisters.sort(function(a,b){
        console.log(a.name.first, b.name.first);
        return a.name.first - b.name.first;
    });
    response.end(JSON.stringify(sorted,null, 4));
});

app.listen(3000, function(){
    console.log(`Server is running`);
});