const mysql = require('mysql');

class MySQLConnection {
    constructor(host, user, password, database) {
        this.conn = mysql.createConnection({
            host,
            user,
            password,
            database
        });
    }
    read(tableName) {
        return new Promise((resolve, reject) => {
            this.conn.query(`select * from ${tableName}`, (err, rows) => {
                if (err) reject(err);

                resolve(rows)
            });
        });
    }
}

module.exports = MySQLConnection;