const express = require('express'),
      consign = require('consign'), 
      bodyParser = require('body-parser'),
      helmet = require('helmet'),
      pool = require('../DAO/poolFactory'),
      connMiddleware = require('./connMiddleware'),
      expressValidator = require('express-validator')

module.exports = () => {
    const app = express()

    app.use(helmet())
    app.use(connMiddleware(pool));
    app.use(bodyParser.urlencoded({ extended: true}))
    app.use(bodyParser.json())
    app.use(expressValidator())

    consign()
        .include('controllers')
        .then('DAO')
        .into(app)

    return app
}