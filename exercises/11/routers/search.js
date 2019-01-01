const express = require('express');
const fsPromise = require('../modules/fs-promise');
const firstResult = require('../modules/google-first-result');
const router = express.Router();

router.get('/search', async function(request, response){
    let result;
    
    const search = request.query.search;
    const filename = 'results/' + search + '.html';

    const fileExists = await isFileExists(filename);
    if (fileExists){
        result = await fsPromise.readFile(filename);
    }
    else {
        result = await firstResult(filename);
        await fsPromise.createFile(filename, result);
    }
    response.end(result);
});

async function isFileExists(filename){
    try {
        return await fsPromise.accessFile(filename);
    }
    catch(ex){
        return false;
    }
}

module.exports = router;