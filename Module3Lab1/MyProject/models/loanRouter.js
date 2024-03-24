const bodyParser = require('body-parser');
const express = require('express');
const controller = require('./loanController');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true}));
router.use(bodyParser.json());

router.get('/loans', (req, res) => {
    controller.saveData();
});


module.exports = router;

