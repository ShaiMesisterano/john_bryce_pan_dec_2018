const mysql = require('mysql');

(function(){
    const conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12345678',
        database: 'recipes'
    });

    conn.query("select * from favorites", (err, favorites) => {
        favorites.forEach(favorite => console.log(favorites));
    });
})();