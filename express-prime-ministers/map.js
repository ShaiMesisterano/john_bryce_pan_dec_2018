var express = require('express');
var app = express();

var primeMinisters = require('./primeMinisters');

app.get('/primeMinisters/contains/:letter', function(request, response) {
    var result = primeMinisters.filter( function(primeMinister){
        var letter = request.params.letter;
        return primeMinister.name.first.indexOf(letter) > -1 || 
            primeMinister.name.last.indexOf(letter) > -1;
    });
    var output = result.map(function(item, index){
        return {
            "index": index,
            "result": item
        }
    });
    response.end(JSON.stringify(output, null, 4));
});

app.listen(3000, function(){
    console.log(`Server is running`);
});