const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    status: { type: String, required: true, enum: ["buy", "sell"] },
    company: { type: String, required: true},
    ticker: { type: String, required: true },
    price: { type: Number, required: true, validate:{
        validator: price => price >= 0,
        message: "cannot be negative"
    }},
    numShares: { type: Number, required: true},
    date: { type: Date, default: Date.now() }
});

module.exports = transactionSchema;
