var fs = require('fs');

function readFile(filename) {
    return new Promise( function(resolve, reject) {
        fs.readFile(filename, 'utf-8', function(error, body){
            if (error) reject(error);
            resolve(body);
        });
    });
}

function createFile(filename, content) {
    return new Promise( function(resolve, reject) {
        fs.writeFile(filename, content, function(error){
            if (error) reject(error);
            resolve(true);
        })
    });
}

function updateFile(filename, content) {
    return new Promise( function(resolve, reject) {
        fs.appendFile(filename, content, function(error){
            if (error) reject(error);
            resolve(true);
        })
    });
}

function deleteFile(filename) {
    return new Promise( function(resolve, reject) {
        fs.unlink(filename, function(error){
            if (error) reject(error);
            resolve(true);
        })
    });
}

function accessFile(filename){
    return new Promise( function(resolve, reject) {
        fs.access(filename, fs.constants.F_OK, function(error){
            if (error) reject(error);
            resolve(true);
        })
    });
}

module.exports = {
    createFile,
    readFile,
    updateFile,
    deleteFile,
    accessFile
}