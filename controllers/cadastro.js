module.exports = app => {
    app.get('/cadastro', (req, res) => {
        console.log('page cadastro opened')
        res.send('OK')
    })
}