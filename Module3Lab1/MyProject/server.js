const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser')

const loanRouter = require('./models/loanRouter');
app.set('view engine', 'ejs');


app.use('/',loanRouter)


app.listen(process.env.PORT, () => {
    console.log(" Server running at port 3000");
});

