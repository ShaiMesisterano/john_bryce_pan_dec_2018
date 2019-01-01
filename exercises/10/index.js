var express = require('express');
var fs = require('fs');

var app = express();

app.get('/', async function (req, res) {
    // Callback
    // fs.readFile('blah.txt', 'utf8', function(error, content){
    //     if (error) {
    //         console.log("Error: " + error);
    //         res.end("Error: " + error);
    //         return;
    //     }
    //     console.log(content);
    //     res.end(content);
    // });
    // Promises
    fsPromise('output.txt', 'utf8').then(function (content) {
        console.log(content);
        res.end(content);
    }).catch(function (error) {
        console.log("Error: " + error);
    });
    // Async/Await
    try{
        var content = await fsPromise('output.txt', 'utf8');
        console.log(content);
        res.end(content);
    }
    catch(ex){
        console.log("Error: " + ex);
    }
});

function fsPromise(filename, encoding) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, encoding, function (error, content) {
            if (error) {
                reject(error);
            }
            /// FUNCTIONALITY
            resolve(content);
        });
    });
}

app.listen(3000, function () {
    console.log("Server is running on port 3000");
})

function syncFsPromise(){
    fs.readFile(filename, encoding, function (error, content) {
        return content;
    });
}

var content = syncFsPromise();