const express = require('express')
const userRouter = express.Router();
const BCrypt = require('bcrypt')
const User = require('../db/models/user')
const connect = require('../db/database_config')


userRouter.post('/signin', async (req, res) => {
    if (await checkAuthenticatedUser(req.body.user)){
        console.log("its the right user")
        res.status(200).json({message: "all good"})
    }
    else {
        console.log("not the right user")
        res.status(400).json({message: "not the right user"})
    }
});

userRouter.post('/signup', async (req, res) => {
    try{
        await createAuthenticatedUser(req.body.user)
    }
    catch (error){
        console.log('error signing up')
        console.log(error)
        res.status(400).json({message: "error signing up"})
        return
    }
    res.status(200).json({message: "all good"})
});

// async function test(){
//     await connect();
//     await User.collection.drop();
//     await createAuthenticatedUser({name: "Richard", email: "richard@yahoo", password: "hello"})

//     console.log( await checkAuthenticatedUser({ name: "Richard", email: "richard@yahoo", password: "goodbye" }))
//     console.log( await checkAuthenticatedUser({ name: "Richard", email: "richa@yahoo", password: "hello" }))
//     console.log( await checkAuthenticatedUser({ name: "Richard", email: "richard@yahoo", password: "hello" }))
// }

async function createAuthenticatedUser(user){
    const {password} = user
    let salt = await BCrypt.genSalt(10);
    let secure_password = await BCrypt.hash(password, salt)
    await User.create({...user, password: secure_password})
}

async function checkAuthenticatedUser(user){
    let existingUser = await User.findOne({ email: user.email })
    if (!existingUser) {
        return false
    }
    else
    {
        if (await BCrypt.compare(user.password, existingUser.password)){
            return true
        }
        return false
    }
}
// test()


module.exports = userRouter;