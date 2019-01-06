const express = require('express');
const mysql = require('mysql');

const MySQLPromise = require('../modules/mysql-promise');

const router = express.Router();

const mySQLPromise = new MySQLPromise(mysql, 'localhost', 'root', '12345678', 'recipes');

router.get('/', async (request, response) => {
    const data = await mySQLPromise.read('favorites');

    response.end(JSON.stringify(data));
});

router.post('/', async (request, response) => {
    const data = await mySQLPromise.create('favorites', request.body);

    response.end(JSON.stringify(data));
});

module.exports = router;