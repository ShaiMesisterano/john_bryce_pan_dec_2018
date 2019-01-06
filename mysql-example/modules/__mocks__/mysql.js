const mysql = require('mysql');
jest.genMockFromModule('mysql');

mysql.createConnection = () => { 
    return {
        query: (str, func) => {
            const result = func(str);
            console.log("RESULT", str);
            return func(str);
        }
    };
 };

module.exports = mysql;