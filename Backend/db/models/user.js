const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const TransactionSchema = require('./transaction')


const transactionSchema = new Schema({
    status: { type: String, required: true },
    company: { type: String, required: true },
    ticker: { type: String, required: true },
    price: { type: Number, required: true },
    numShares: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});


const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    funds: {type: Number, required: true, default: 5000},
    date: {type: Date, default: Date.now },
    transactions: [ transactionSchema ]
    
});

module.exports = mongoose.model('User', userSchema);
