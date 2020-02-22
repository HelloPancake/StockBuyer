const jwt = require('jsonwebtoken')
const PRIVATE_KEY = "49E5F770B29009F40A4437FB60D7640C589FB2049DEA767AF38F994003D25FA1"

const generate_token = (payload) => {
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

const verify_token = (token) => {
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
//     let token = await generate_token()
//     console.log(token)
//     let payload = await verify_token(token)
//     console.log(payload)
// }

// test()
module.exports = {generate_token, verify_token}

