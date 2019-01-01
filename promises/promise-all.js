var fs = require('fs');

function getData(filename){
    return new Promise(function(resolve, reject){
        fs.readFile(filename, 'utf8', function(error, content){
            resolve(content);
        })
    });
};

var customers = getData('data/customers.json');
var management = getData('data/management.json');
var publishers = getData('data/publishers.json');

// then()
Promise.all([customers, management, publishers]).then(function(values){
    console.log(values);
})

//async-await
(async function(){
    var results = await Promise.all([customers, management, publishers]);
    console.log(results);
})();