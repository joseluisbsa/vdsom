const AlunoDao = require('../../DAO/AlunoDao');
let api = {};

api.enviar = (req, res, next) => {
    res.json([{nome: 'Jose'},{nome: 'Luidi'}]);
}

api.listar = (req, res, next) => {
    const responderClient = alunos => {
        console.log(alunos);
        res.status(200).json(alunos);
    };

    new AlunoDao(req.connection)
        .listar()
        .then(responderClient)
        .catch(erro => {
            console.log('Erro DB: ' + erro);
            res.status(500).send(erro);
        });
}

api.cadastrar = (req, res, next) => {

    req.assert('nome', 'Nome obrigatorio').notEmpty();
    req.assert('idade', 'Idade obrigatoria').notEmpty();

    const erros = req.validationErrors();

    if (erros) {
        console.log('Erro em algum campo');
        res.status(400).send(erros);
        return;
    };

    let aluno = req.body;

    const responderClient = resultado => {
        console.log('Aluno criado');
        res.location('/alunos/' + resultado.insertId);
        res.status(201).json(aluno);
    };

    new AlunoDao(req.connection)
        .cadastrar(aluno)
        .then(responderClient)
        .catch(erro => {
            console.log('Erro DB: ' + erro);
            res.status(500).send(erro);
        });
};

module.exports = api;