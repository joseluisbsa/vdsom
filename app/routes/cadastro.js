const api = require('../api/cadastro');
//const AlunoDao = require('../../DAO/AlunoDao');

module.exports = app => {

    app.get('/alunos', api.listar);
    app.get('/nomes', api.enviar);
    app.get('/grupos', api.enviarGrupos);
    app.post('/alunos', api.cadastrar);
};