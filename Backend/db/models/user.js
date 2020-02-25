const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BCrypt = require('bcrypt')
const transactionSchema = require('./transaction')



const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    funds: { type: Number, required: true, default: 5000, validate: {
        validator: funds => funds >=0,
        message: ":not enough funds"
    } },
    date: { type: Date, default: Date.now() },
    transactions: [transactionSchema]
});

userSchema.methods.buyStock = async function buyStock(transaction){
    this.transactions.push({...transaction, status:"buy"})
    this.funds = this.funds - (transaction.price * transaction.numShares)
    try {
        await this.save()
        return 200
    }
    catch (error){
        console.log(error.message)
        return 500
    }
    
}

userSchema.statics.createAuthenticatedUser = async function createAuthenticatedUser(user) {
    const { password } = user
    let salt = await BCrypt.genSalt(10);
    let secure_password = await BCrypt.hash(password, salt)
    return await this.create({ ...user, password: secure_password })
}

userSchema.statics.checkAuthenticatedUser = async function checkAuthenticatedUser(user) {
    let existingUser = await this.findOne({ email: user.email })
    if (!existingUser) {
        return false
    }
    else {
        if (await BCrypt.compare(user.password, existingUser.password)) {
            return true
        }
        return false
    }
}

module.exports = mongoose.model('User', userSchema);
