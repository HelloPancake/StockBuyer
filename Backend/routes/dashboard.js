const express = require('express')
const dashBoardRouter = express.Router();
const User = require('../db/models/user')
// const Transaction = require('../db/models/transaction')
const connect = require('../db/database_config')


dashBoardRouter.get('/', async (req, res) => {
    res.json({message: "get"})
});

dashBoardRouter.get('/transactions', async (req, res) => {
    res.json({ message: "transactions" })
});

dashBoardRouter.get('/portfolio', async (req, res) => {
    res.json({ message: "portfolio" })
});

// post transaction
dashBoardRouter.post('/transactions', async (req, res) => {
    // await User.findOne({})
});


// async function test(){
//     await connect()
//     await User.collection.drop()
//     await User.create({
//         name: "Richard", email: "richard@yahoo.com", password: "hello"
//     });
//     let found = await User.findOne({name:"Richard"})
//     console.log(found.portfolio[0])
//     let transaction = {
//         status: "Sell",
//         company: "Alphabet",
//         ticker: "Google",
//         price: 25,
//         numShares: 10
//     }
//     found.transactions.push(transaction)

//     try {
//         await found.save()
      
//     }
//     catch (error){
//         console.log('messed up')
//         console.log(error)
//     }
// }

// test()



// let transaction = {
//     status: "Sell", 
//     company: "Alphabet", 
//     ticker: "GOOG", 
//     price: 25, 
//     numShares: 10
// }

// const test = async (transaction) => {
//     await connect();
//     await Transaction.collection.drop();
//     await Transaction.create(transaction)
// }

// test(transaction)

module.exports = dashBoardRouter;