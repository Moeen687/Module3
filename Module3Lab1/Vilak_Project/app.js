const express = require('express');
const loanRouter = require('./model/loanRoutes');

const app = express();

app.use(express.json());

app.use('/loans', loanRouter);

module.exports = app;
