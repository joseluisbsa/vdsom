module.exports = app => {
    app.get('/cadastro', (req, res) => {
        console.log('page cadastro opened')
        res.send('OK')
    })

    app.post('/cadastro/adicionar', (req, res) => {
        let reqBody = req.reqBody

        console.log('req recebecido em /cadastro/adicionar')

        reqBody.status = 'CRIADO'
        reqBody.data = new Date

        res.send(reqBody)

    })
}