module.exports = app => {
    app.get('/cadastro', (req, res) => {
        console.log('page cadastro opened');
        res.send('OK');
    })

    app.post('/cadastro/adicionar', (req, res) => {

        req.assert('nome', 'Nome obrigatorio').notEmpty();
        req.assert('idade', 'Idade obrigatoria').notEmpty();

        const erros = req.validationErrors();

        if (erros) {
            console.log('Erro em algum campo');
            res.status(400).send(erros);
            return;
        }

        let aluno = req.body;

        console.log('req recebecido em /cadastro/adicionar');

        let alunoDao = new app.DAO.AlunoDao(req.connection);

        alunoDao.criarAluno(aluno, (erro, resultado) => {
            if (erro) {
                console.log('Erro DB: ' + erro);
                res.status(500).send(erro);
            } else {
                console.log('aluno criado');

                res.location('/cadastro/adicionar/' + resultado.insertId);
                res.status(201).json(aluno);
            }
        });
    });
}