const mysql = require('mysql')

function createDBConnection(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'toor',
        database: 'VDSom'
    })
}

module.exports = function(){
    return createDBConnection
}