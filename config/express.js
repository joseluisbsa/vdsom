const express = require('express'),
      consign = require('consign'), 
      bodyParser = require('body-parser'),
      helmet = require('helmet'),
      pool = require('../DAO/poolFactory'),
      connMiddleware = require('./connMiddleware'),
      expressValidator = require('express-validator'),
      app = express();

app.use(express.static('./public'));
app.use(helmet());
app.use(connMiddleware(pool));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(expressValidator());

consign()
    .include('app/routes')
    .then('DAO/poolFactory.js')
    .into(app);

module.exports = app;