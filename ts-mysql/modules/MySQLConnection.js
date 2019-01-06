"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
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
            this.conn.query(`select * from ${tableName}`, function getRows(err, rows) {
                if (err) {
                    console.log("ERROR", err);
                    reject(err);
                }
                ;
                resolve(rows);
            });
        });
    }
    create(tableName, fields) {
        const { name, ingredients, bakeTime } = fields;
        return new Promise((resolve, reject) => {
            this.conn.query(`insert into ${tableName} (name, ingredients, bakeTime) values('${name}','${ingredients}', '${bakeTime}')`, (err, rows) => {
                if (err)
                    reject(err);
                resolve(rows);
            });
        });
    }
}
exports.default = MySQLConnection;
