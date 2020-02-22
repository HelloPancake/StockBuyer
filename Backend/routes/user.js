const express = require('express')
const userRouter = express.Router();
const User = require('../db/models/user')
const connect = require('../db/database_config')
const { generate_token, verify_token} = require('../util/session_token')


userRouter.post('/signin', async (req, res) => {
    if (await User.checkAuthenticatedUser(req.body.user)){
        console.log("its the right user")
        res.status(200).json({message: "all good"})
    }
    else {
        console.log("not the right user")
        res.status(400).json({message: "not the right user"})
    }
});

userRouter.post('/signup', async (req, res) => {
    let user;
    try{
        user = await User.createAuthenticatedUser(req.body.user)
    }
    catch (error){
        console.log('error signing up')
        console.log(error)
        res.status(400).json({message: "error signing up"})
        return
    }

    let payload = user.id
    let token = await generate_token({ payload })
    res
        .status(200)
        .cookie("token", token)
        .json({ message: "all good",
                user: user }); 
});

// async function test(){
//     await connect();
//     await User.collection.drop();
//     await createAuthenticatedUser({name: "Richard", email: "richard@yahoo", password: "hello"})

//     console.log( await checkAuthenticatedUser({ name: "Richard", email: "richard@yahoo", password: "goodbye" }))
//     console.log( await checkAuthenticatedUser({ name: "Richard", email: "richa@yahoo", password: "hello" }))
//     console.log( await checkAuthenticatedUser({ name: "Richard", email: "richard@yahoo", password: "hello" }))
// }


// test()


module.exports = userRouter;