const mysql = require('promise-mysql');

(async function(){
    const conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12345678',
        database: 'recipes'
    });

    const favorites = await conn.query("select * from favorites");

    favorites.forEach( favorite => console.log(favorite) );
})();