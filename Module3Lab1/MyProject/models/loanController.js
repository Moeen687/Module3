const LoanDbContext = require('../dataBaseManager/loanDbContext');  // Import the class
const dbUrl = 'mongodb://localhost:27017';
const dbName = 'loanDb';
const collecLonName = 'loanCollection';
const loanDbContext = new LoanDbContext(dbUrl, dbName);
exports.saveData = async (req, res) => {
    try {
        // Connect to the database
        await loanDbContext.connect();
        // Fetch the loans using the getLoans method of LoanDbContext
        const loans = await loanDbContext.getLoans(collecLonName);
        res.json(loans);
    } catch (error) {
        console.error('Failed to fetch loans:', error);
        res.status(500).send('Internal Server Error');
    } finally {
        // Ensure the database connecLon is closed aXer the request
        await loanDbContext.close();
    }
};