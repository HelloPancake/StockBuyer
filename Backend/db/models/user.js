const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    funds: {type: Number, required: true, default: 5000},
    date: {type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
