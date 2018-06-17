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

// to test using curl: curl http://localhost:3000/cadastro/adicionar -X POST -v  -H "Content-type: application/json" -d @user.json | json_pp