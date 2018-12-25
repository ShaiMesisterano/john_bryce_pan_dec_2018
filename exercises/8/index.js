var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var primeMinisters = require('../../express-prime-ministers/primeMinisters');

var app = express();

app.use(cookieParser());
app.use(session({secret: "abcd1234"}));

app.get('/primeMinisters/firstName/:firstName', function(request, response) {
    var primeMinister = getByFirstName(request.params.firstName);
    var parties = primeMinister.parties;
    var history = request.cookies.history || [];
    if (typeof parties === "string") {
        // if (!history.includes(parties)){
        //     history.push(parties);
        // }
        !history.includes(parties) && history.push(parties);
    }
    else if (Array.isArray(parties)) {
        for (var party of parties) {
            !history.includes(party) && history.push(party);
        }
    }
    response.cookie('history', history);
    response.end("PRIME MINISTER: " + primeMinister.name.first + + " " + primeMinister.name.last + "\n\n" + "HISTORY:" + JSON.stringify(request.cookies.history,null, 4));
});

function getByFirstName(firstName) {
    return primeMinisters.filter( function(primeMinister){
        return primeMinister.name.first === firstName;
    })[0];
}

app.listen(3000, function(){
    console.log(`Server is running...`);
})