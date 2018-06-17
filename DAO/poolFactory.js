const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host : 'localhost',
    user : 'root',
    password : 'toor',
    database : 'VDSom'
});

console.log('pool => criado');

pool.on('release', () => console.log('pool => conexão retornada')); 

process.on('SIGINT', () => 
    pool.end(err => {
        if(err) return console.log(err);
        console.log('pool => fechado');
        process.exit(0);
    })
); 

module.exports = pool;

// to test using curl: curl http://localhost:3000/cadastro/adicionar -X POST -v  -H "Content-type: application/json" -d @user.json | json_pp