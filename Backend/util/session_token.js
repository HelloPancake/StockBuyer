const jwt = require('jsonwebtoken')
const PRIVATE_KEY = "49E5F770B29009F40A4437FB60D7640C589FB2049DEA767AF38F994003D25FA1"

const generateToken = (payload) => {
    const oneHour = 60 * 60
    return new Promise((resolve, reject) => {
        jwt.sign(payload, PRIVATE_KEY,
        {expiresIn: oneHour}, (error, token) => {
            if (error){
                reject(error)
            }
            else{
                resolve(token)
            }
        })
    })

}

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, PRIVATE_KEY, (error, payload) => {
            if(error){
                reject(error)
            }
            else{
                resolve(payload)
            }
        })

    })
}

// const test = async () => {
//     let token = await generateToken()
//     console.log(token)
//     let payload = await verifyToken(token)
//     console.log(payload)
// }

// test()
module.exports = {generateToken, verifyToken}

