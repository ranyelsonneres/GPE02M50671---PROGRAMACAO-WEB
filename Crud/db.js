const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'c@tolic@',
    database: 'userdb2'
});

db.connect(err => {
    if (err) throw err;
    console.log('conectado ao banco!');
});

module.exports = db;
