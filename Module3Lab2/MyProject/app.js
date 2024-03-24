const express = require('express');
const app = express();
const router= require('./testCRUD');
const port = 3000;

app.use('/',router);

// app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));