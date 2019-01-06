jest.unmock('mysql');
const mysql = require.requireActual('mysql');

const mockData = require('../__mocks__/mockData.json');

const MySQLPromise = require('../mysql-promise');

describe('MySQLPromise mock tests', async function () {
    const mySQLPromise = new MySQLPromise(mysql, 'localhost', 'root', '12345678', 'recipes');

    test('"read" should return all recipes', async function () {
        const data = await mySQLPromise.read('favorites');
        expect(JSON.stringify(data)).toBe(JSON.stringify(mockData));
    });
});