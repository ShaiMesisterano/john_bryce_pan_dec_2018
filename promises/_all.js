var fs = require('fs');

function readFilePromise(filename) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, 'utf8', function (error, content) {
            if (error) {
                reject(error);
            }
            resolve(content);
        });
    });
}

var customers = readFilePromise('data/customers.json');
var pulishers = readFilePromise('data/publishers.json');
var management = readFilePromise('data/management.json');

Promise.all([customers, pulishers, management]).then(function(values){
    var _customers = values[0];
    var _pulishers = values[1];
    var _management = values[2];
    console.log(_customers);
});