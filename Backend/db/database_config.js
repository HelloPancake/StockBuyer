const mongoose = require('mongoose');

const connect = async () => {
    await mongoose.connect('mongodb://localhost:27017/stocks', { useNewUrlParser: true, useUnifiedTopology: true });
}

module.exports = connect;