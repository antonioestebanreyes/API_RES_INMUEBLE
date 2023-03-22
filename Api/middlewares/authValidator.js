 import jwt from "jwt-simple"
import user from "../model/user.js";
import dotenv from "dotenv"

dotenv.config()
 const  auth=async (req,res,next)=>{

    const {authorization: token}=req.headers;
    if(!token){
        return res.status(403).json({
msg:"Falta la cabezera del header"
        })
    }
    try {
        const payload=jwt.decode(token,process.env.JWT_SECRE)
        const {userId}=payload
        if (!userId) {//ok
          return  res.status(403).json({
                msg:"toke Valilation"
            })
        }
        const User= await user.findById(userId)
        if (!User){
            return res.status(403).JSON({
                msg:"toke invalido"
            })
        }
        next()
    } catch (error) {
        //Acá falla cuando el token no se pudo decodificar con la llave que teníamos o era un token inválido
        return res.status(403).json({
          msg: 'Token inválido',
        });
      }
}


export {auth}


 

