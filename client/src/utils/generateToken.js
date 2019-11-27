import jwt from 'jsonwebtoken'
//const jwt = require ('jsonwebtoken')
const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET , { expiresIn: '7 days' })
}
//console.log(generateToken('zxc'));


export { generateToken as default }