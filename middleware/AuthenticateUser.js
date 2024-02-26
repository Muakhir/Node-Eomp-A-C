import { config } from "dotenv";
import jwt from "jsonwebtoken";

config()
const { sign,verify } = jwt

function createToken(user){
    return sign({
        emailAdd: user.emailAdd,
        userPwd: user.userPwd
    },
    process.env.SECRET_KEY,
    {expiresIn: '1h'})
}

function verifyToken(req,res,next){
    const token = req.headers['Authorization']
    if(token){
        if(verify(token,process.env.SECRET_KEY)){
            next()
        }else{
            res?.json({status: res.statusCode,msg:"Please provide correct details"})
        }
    }
}
export{createToken,verifyToken}