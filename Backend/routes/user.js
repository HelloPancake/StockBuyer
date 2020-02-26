const express = require('express')
const userRouter = express.Router();
const User = require('../db/models/user')
const connect = require('../db/database_config')
const { generateToken, verifyToken} = require('../util/session_token')


userRouter.post('/signin', async (req, res) => {


    if (await User.checkAuthenticatedUser(req.body.user)){
        console.log("its the right user")
    
        let user = await User.findOne({email: req.body.user.email})
        let userId = user.id
        let token = await generateToken({ userId })
        
        res
            .status(200)
            .cookie("token", token)
            .json({message: "all good",
                    user: user});
        
    }
    else {
        console.log("not the right user")
        res.status(500).json({message: "not the right user"})
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
        res.status(400).json({message: error.message})
        return
    }

    let payload = user.id
    let token = await generateToken({ payload })
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