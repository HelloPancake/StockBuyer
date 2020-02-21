const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')
const port = 3001;
const connect = require('./db/database_config');
const User = require('./db/models/user');
const userRouter = require('./routes/user')
const dashBoardRouter = require('./routes/dashboard')
// const TransactionSchema = require('./db/models/transaction')


initialize();

app.use(cors());
app.use(bodyParser.json())
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
    
    // await User.create({
    //     name: "Richard", email: "richard@yahoo.com", password: "hello"
    // });
    // let found = await User.findOne({name: "Richard"})
    // console.log(found)
    // found.transactions.push("HELLO")
    // found.save()
    // console.log(found)
}