const mysql = require('mysql');
const MySQLPromise = require('../mysql-promise');

describe('MySQLPromise mock tests', async function () {
    const mySQLPromise = new MySQLPromise(mysql, 'localhost', 'root', '12345678', 'recipes');
    
    const spyQuery = jest.spyOn(mySQLPromise.conn, 'query');

    test('"read" should execute a SELECT query', async function () {
        await mySQLPromise.read('favorites');
        const query = "select * from favorites";
        expect(spyQuery).toBeCalledWith(query, expect.anything());
    });

    test('"create" should execute an INSERT INTO query', async function () {
        const tableName = 'favorites';
        const fields = {
            name: "mockName",
            ingredients: "mockIngredients",
            bakeTime: "mockBakeTime"
        };
        const { name, ingredients, bakeTime } = fields;
        await mySQLPromise.create('favorites', fields);
        const query = `insert into ${tableName} (name, ingredients, bakeTime) values('${name}','${ingredients}', '${bakeTime}')`;
        expect(spyQuery).toBeCalledWith(query, expect.anything());
    });
});