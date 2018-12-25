var express = require('express');
var app = express();

var primeMinisters = require('./primeMinisters');

console.log(JSON.stringify(primeMinisters, null, 4));

// app.get('/primeMinisters/parties', function(request, response){
//     var parties = [];
//     for (var i=0; i<primeMinisters.length; i++) {
//         parties.push(primeMinisters[i].parties);
//     }
//     response.end(JSON.stringify(parties, null, 4))
// });

app.get('/primeMinisters/termOfOffice', function(request, response){
    var fromYear = Number(request.query.from);
    var toYear = Number(request.query.to);
    var result = [];
    for (var i=0; i<primeMinisters.length; i++) {
        if (Array.isArray(primeMinisters[i].termOfOffice)){
            for (var j=0; j< primeMinisters[i].termOfOffice.length;j++){
                if (primeMinisters[i].termOfOffice[j].fromYear >= fromYear && primeMinisters[i].termOfOffice[j].toYear <= toYear) {
                    result.push(primeMinisters[i].name);
                }
            }
        }
        else {
            if (primeMinisters[i].termOfOffice.fromYear >= fromYear && primeMinisters[i].termOfOffice.toYear <= toYear) {
                result.push(primeMinisters[i].name);
            }
        }
    }
    response.end(JSON.stringify(result, null, 4))
});

app.listen(3000, function(){
    console.log(`Server is running`);
});