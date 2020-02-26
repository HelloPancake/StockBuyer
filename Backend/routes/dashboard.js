const express = require('express')
const dashBoardRouter = express.Router();
const User = require('../db/models/user')
const connect = require('../db/database_config');
const {verifyToken, generateToken} = require('../util/session_token');


dashBoardRouter.use(async (request, response, next) => {
    try{
        const payload = await verifyToken(request.cookies.token)
        request.userId = payload.userId
        next()
    }
    catch(error){
        response.status(401).clearCookie('token').json({message: error.message})
    }
})


dashBoardRouter.head('/', async (req, res) => {
    res.json({message: "get"})
});

dashBoardRouter.get('/transactions', async (request, response) => {
    const user = await User.findById(request.userId)
    response.status(200).json({ user })
});


// post transaction
dashBoardRouter.post('/transactions', async (req, res) => {
    let {stock, price, shares, user, companyName} = req.body.transaction
    let currUser = await User.findOne({email: user.email})
    let userId = currUser.id
    let token = await generateToken({userId})
    let transaction = {ticker: stock, price, numShares: shares, company: companyName}
    let response = await currUser.buyStock(transaction)
    
    currUser = await User.findById(userId)

    if (response === 200){
        res
            .status(200)
            .cookie("token", token)
            .json({
                message: "purchase completed",
                user: currUser
            });
    }
    else {
        res
            .status(400)
            .cookie("token", token)
            .json({
                message: "not enough funds",
                user: currUser
            });
    }
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