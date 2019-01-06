const mysql = require('mysql');
jest.genMockFromModule('mysql');

mysql.createConnection = () => { 
    return {
        query: function(str, func) {
            const result = func(null, str);
            return result;
        }
    };
 };

module.exports = mysql;