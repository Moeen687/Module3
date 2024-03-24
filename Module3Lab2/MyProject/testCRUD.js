const express = require('express');

const router = express.Router();
const { insertLoanData, findLoanData, updateLoanData, deleteLoanData } = require('./MongoDBCrud');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

// Create (Insert) Operation
router.post('/loan_data', async (req, res) => {
    const loanData = req.body;
    try {
        await insertLoanData(loanData);
        res.status(201).send({ message: 'New document inserted.' });
    } catch (error) {
        res.status(500).send({ error: error.toString() });
    }
});

// Read (Find) Operation
router.get('/loan_data/:customerId', async (req, res) => {
    const query = { customerId: parseInt(req.params.customerId) };
    try {
        const loanData = await findLoanData(query);
        res.status(200).send(loanData);
    } catch (error) {
        res.status(500).send({ error: error.toString() });
    }
});

// Update Operation
router.put('/loan_data/:customerId', async (req, res) => {
    const query = { customerId: parseInt(req.params.customerId) };
    const update = req.body;
    try {
        await updateLoanData(query, update);
        res.status(200).send({ message: 'Document updated.' });
    } catch (error) {
        res.status(500).send({ error: error.toString() });
    }
});

// Delete Operation
router.delete('/loan_data/:customerId', async (req, res) => {
    const query = { customerId: parseInt(req.params.customerId) };
    try {
        await deleteLoanData(query);
        res.status(200).send({ message: 'Document deleted.' });
    } catch (error) {
        res.status(500).send({ error: error.toString() });
    }
});

module.exports = router;
