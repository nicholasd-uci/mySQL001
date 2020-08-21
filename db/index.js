const mysql = require('mysql2')

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'rootroot',
//     database: 'todo_db'
// })

// module.exports = db


// you can also write it like this:
module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'todo_db'
})