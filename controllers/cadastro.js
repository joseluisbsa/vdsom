module.exports = app => {
    app.get('/cadastro', (req, res) => {
        console.log('page cadastro opened')
        res.send('OK')
    })

    app.post('/cadastro/adicionar', (req, res) => {
        let aluno = req.body

        console.log('req recebecido em /cadastro/adicionar')

        let connection = app.DAO.connectionFactory()
        let alunoDao = new app.DAO.AlunoDao(connection)

        alunoDao.criarAluno(aluno, (erro, resultado) => {
            if (erro) {
                res.send(erro)
            } else {
                console.log('aluno criado')
                res.json(aluno)
            }
        })
        connection.end();
    })
}