const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const helmet = require('helmet')


module.exports = () => {
    const app = express()

    app.use(helmet())
    app.use(bodyParser.urlencoded({ extended: true}))
    app.use(bodyParser.json())

    consign()
        .include('controllers')
        .then('DAO')
        .into(app)

    return app
}