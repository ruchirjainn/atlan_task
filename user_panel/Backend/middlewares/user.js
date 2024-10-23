const User = require('../models/user')
const jwt = require('jsonwebtoken')

exports.isSignedIn = (async(req,res,next) => {
    try{
        const token = req.cookies.token
        // console.log(token);
        if(!token){
            return res.status(401).json({
                message:"Sign in first",
                success: true
            })
        }

        const secretKey = 'YourHardCodedSecretKey';

        const decode = jwt.verify(token,secretKey)
        // console.log(decode)
        req.user = await User.findById(decode.id)

        next();
    }   
    catch(err){
        console.log(err);
    }
})