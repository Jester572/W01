//Server file
const express = require('express');
const connectDB = require('./db/connect');
const app = express();


connectDB;
const port = 3000

app.use('/', require('./routes/contacts'));

app.listen(process.env.port || port);
console.log('Web Server is listening at port ' + (process.env.port || port));