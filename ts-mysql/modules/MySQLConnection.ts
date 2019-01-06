import * as mysql from 'mysql';

class MySQLConnection {
    public conn: mysql.Connection;
    constructor(host: string, user: string, password: string, database: string) {
        this.conn = mysql.createConnection({
            host,
            user,
            password,
            database
        });
    }
    read(tableName: string) {
        return new Promise((resolve, reject) => {
            this.conn.query(`select * from ${tableName}`, function getRows(err, rows) {
                if (err) {
                    console.log("ERROR", err);
                    reject(err);
                };

                resolve(rows);
            });
        });
    }
    create(tableName: string, fields: IRecipe) {
        const { name, ingredients, bakeTime } = fields;
        return new Promise((resolve, reject) => {
            this.conn.query(`insert into ${tableName} (name, ingredients, bakeTime) values('${name}','${ingredients}', '${bakeTime}')`, (err, rows) => {
                if (err) reject(err);

                resolve(rows)
            });
        });
    }
}

export default MySQLConnection;