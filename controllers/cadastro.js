module.exports = app => {
    app.get('/cadastro', (req, res) => {
        console.log('page cadastro opened')
        res.send('OK')
    })

    app.post('/cadastro/adicionar', (req, res) => {
        let aluno = req.body

        console.log('req recebecido em /cadastro/adicionar')

        let alunoDao = new app.DAO.AlunoDao(req.connection)

        alunoDao.criarAluno(aluno, (erro, resultado) => {
            if (erro) {
                res.send(erro)
            } else {
                console.log('aluno criado')
                res.json(aluno)
            }
        })
    })
}