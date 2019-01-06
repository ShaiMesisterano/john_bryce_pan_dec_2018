class MySQLConnection {
    constructor(mysql, host, user, password, database) {
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
    create(tableName, fields) {
        console.log(fields);
        const { name, ingredients, bakeTime } = fields;
        return new Promise((resolve, reject) => {
            this.conn.query(`insert into ${tableName} (name, ingredients, bakeTime) values('${name}','${ingredients}', '${bakeTime}')`, (err, rows) => {
                if (err) reject(err);

                resolve(rows)
            });
        });
    }
}

module.exports = MySQLConnection;