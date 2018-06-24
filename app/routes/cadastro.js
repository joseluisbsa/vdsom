const api = require('../api/cadastro');
//const AlunoDao = require('../../DAO/AlunoDao');

module.exports = app => {

    app.get('/alunos', api.listar);
    app.post('/alunos', api.cadastrar);
};