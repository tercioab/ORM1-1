const express = require('express');

const employee = require('./routes/employee.router')

const app = express();

app.use(express.json());

app.use('/employees', employee);


module.exports = app;