const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const port = 3001;
const connect = require('./db/database_config');
const User = require('./db/models/user');
const userRouter = require('./routes/user')
const dashBoardRouter = require('./routes/dashboard')


initialize();

app.use(cors());
app.use(bodyParser.json())
app.use(cookieParser())
app.use('/user', userRouter)
app.use('/dashboard', dashBoardRouter)

app.listen(port, () => console.log(`Express running on ${port}!`));

async function initialize(){
    await connect()
    try{
        await User.collection.drop();
    }
    catch (error){
        console.log("no database to drop")
    }

    await User.createAuthenticatedUser({
        name: "Richard", email: "abc", password: "abc"
    });
    // await found.save()
    
    let found = await User.findOne({ email: "abc"})
        // console.log(found)

        found.transactions.push({
            status: "buy",
            company: "fd",
            ticker: "IBM",
            price: 10,
            numShares: 20
        })        
        found.transactions.push({
            status: "buy",
            company: "ibm",
            ticker: "IBM",
            price: 10,
            numShares: 20
        })        
        found.transactions.push({
            status: "buy",
            company: "water",
            ticker: "IBM",
            price: 10,
            numShares: 20
        })        

        await found.save()
        // found.buyStock({
        //     company:"fd",
        //     ticker:"sdf",
        //     price: 10,
        //     numShares: 20
        // })

}
