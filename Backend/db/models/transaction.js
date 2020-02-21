const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    status: { type: String, required: true },
    company: { type: String, required: true },
    ticker: { type: String, required: true },
    price: { type: Number, required: true},
    numShares: { type: Number, required: true},
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', transactionSchema);
