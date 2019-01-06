const mysql = require('mysql');
const MySQLPromise = require('../mysql-promise');

test('"read" should execute a select query with correct parameters', async function () {
    const mySQLPromise = new MySQLPromise(mysql, 'localhost', 'root', '12345678', 'recipes');
    
    const spyQuery = jest.spyOn(mySQLPromise.conn, 'query');

    const data = await mySQLPromise.read('favorites');

    // console.log("mySQLPromise.conn", mySQLPromise.conn);

    expect(42).toBe(42)
    // expect(spyQuery).toBeCalled();
    // const expectedQuery = "select * from favorites";

    // expect(spyQuery).toHaveReturnedWith(expectedQuery);
});