const Loan = require('./loanModel');
require('dotenv');
const LoanDBContext = require('../dataBaseManager/loanDbContext');

exports.saveData = async (req, res) => {
    try {
        // Connect to the database
        await LoanDBContext.connect();

        // Fetch the loans data
        const loans = await Loan.find();

        // Return the loans data as a JSON response
        res.status(200).json({
            status: 'success',
            results: loans.length,
            data: {
                loans
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
