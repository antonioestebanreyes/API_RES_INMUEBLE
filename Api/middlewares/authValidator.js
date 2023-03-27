 import jwt from "jwt-simple"
import user from "../model/user.js";
import dotenv from "dotenv"

dotenv.config()
 const  auth=async (req,res,next)=>{
//El toke propiene req.headers
    const {authorization: token}=req.headers;
    if(!token){
        return res.status(403).json({
msg:"Falta el token en los header"
        })
    }
    try {
        // Aqui se esta decoficado el paquete jwt-simple
        const payload=jwt.decode(token,process.env.JWT_SECRE)
        // Aqui estamos haciendo una destructuracion, para sacar userId
        const {userId}=payload
        // Aqui estamos haciendo una validacion si no es diferente
        if (!userId) {//ok
          return  res.status(403).json({
                msg:"toke invalido"
            })
        }
        //Aqui se esta realizado una busqueda por id
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


 

