
const express = require('express');
const bodyParser = require('body-parser');
// const { makeUpperCase } = require('./middlewares');
// const studentsRouter = require('./controllers/students');

const app = express();

app.use(bodyParser.json());
// app.use(makeUpperCase);

// app.use('/students', studentsRouter);

app.use('/', function(req, res, next) {
    console.log("Request url:"+req.url);
});

const mongoose = require('mongoose');
const uri = "mongodb+srv://Mohiddeen123:Moinzaheer@1@mwp-p1.0ye6dqg.mongodb.net/";
mongoose.connect(uri, 
    {
        useNewUrlParser: true, useUnifiedTopology: true
    });
app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});