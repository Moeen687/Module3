const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    customerId: {
        type: Number,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    customerEmail: {
        type: String,
        required: true
    },
    loanId: {
        type: Number,
        required: true
    },
    loanAmount: {
        type: Number,
        required: true
    },
    loanIssueDate: {
        type: Date,
        required: true
    },
    loanStatus: {
        type: String,
        required: true
    },
    paymentId: {
        type: Number,
        required: true
    },
    paymentAmount: {
        type: Number,
        required: true
    },
    paymentDate: {
        type: Date,
        required: true
    }
});

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;
