const mysql = require('mysql');
jest.genMockFromModule('mysql');

mysql.createConnection = () => { 
    return {
        query: (str, func) => {
            return func(null, "OK");
        }
    };
 };

module.exports = mysql;