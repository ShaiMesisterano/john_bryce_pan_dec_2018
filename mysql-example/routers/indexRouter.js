const express = require('express');
const MySQLPromise = require('../modules/mysql-promise');

const router = express.Router();

router.get('/', async (request, response) => {
    const mySQLPromise = new MySQLPromise('localhost', 'root', '12345678', 'recipes');
    const data = await mySQLPromise.read('favorites')
    ;

    response.end(JSON.stringify(data));
});

module.exports = router;