import jwt from "jwt-simple"
import user from "../model/userjs"
import dotenv from "dotenv"
dotenv.config()
const authadmit= async(res,req,next)=>{
    const {authorizacion:token}=req.headers;
    if(!token){
        return res.status(403).json({
            msg:"Falta el token"
        })


    }
    try {
        const payload=jwt.decode(token,process.env.JWT_SECRE)
        const {rol}=payload
        if (rol!="admistrador") {
            return res.status(403).json({
                msg:"token inavalido"
            })
        }
        const User= await user.find({
            rol:"adminitrador"
        })
        if(User!=="adminitrador"){
            return res.status(403).json({
                msg:"token invalido"
            })
        }
     next()   
    } catch (error) {
        return res.status(403).json({
            msg:"token inavalido"
        })
    }
}
export {authadmit}