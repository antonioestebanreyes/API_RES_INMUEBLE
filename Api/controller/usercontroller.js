import bcrypt from "bcrypt"
import user from '../model/user.js'
import config from "../config/index.js"
const create = async (req,res)=>{
    try {
         const hashin=await bcrypt.hash(req.body.Contraseña,10)
        req.body.Contraseña=hashin
        const User=await user.create(req.body)
        User.Contraseña=undefined
       
        return res.json({
            msg:'user creado con exito',User
        })
    } catch (error) {
        return res.status(500).json({
            msg:"Ocurrio un error al crear el user"
        })
    }
}

const login=async(req,res)=>{
   const {body}=req;
   //Validacion 
   if (!body.Contraseña|| !body.correo) {
    return res.status(400).json({
        msg:"Ingreso mal la ontraseña"
    })
   }

try {
    //Aqui realiza una buequeda en especifoca
    const User=await user.findOne({
        correo:body.correo,
    });
   // Validacion de user
    if (!User) {
        return res.status(403).json({
            msg:"Credenciales invalidas"
        })
    }
    // Validacion body.cotraseña con user.contraseña
    const isvalida =await bcrypt.compare(body.Contraseña,User.Contraseña)
if (!isvalida) {
    return res.status(403).json({
        msg:'credenciles invalidas'
    })
}
//Aqui estamos hacediendo al id del usuario guardo llamado preveviente en la busquedad user.findOne
const payload={
    userId:User.id
}
const token = jwt.encode(payload, config.jwtSecret);

return res.json({
  msg: 'Login correcto',token
});
} catch(error){return res.status(500).json({
    msg:"Eror al hacer login",error
})}

}
const read=async (req,res)=>{
    try {
        const User=await user.find(req.query)
        return res.json({
            msg:'usurio encontrado',User
        })
    } catch (error) {
        return res.status(500).json({
            msg:'Error al buscar al usuario',error
        })
        
    }
}


const readById=async (req,res)=>{
    const {id}=req.params;
    try {
        const User= await user.findById(id)
        return res.json({
            msg:"Encontrado",User
        })
    } catch (error) {
        return res.json({
            msg:"Error al buscar por id",error
        })
    }
}
const update =async (req,res)=>{
    const {id}=req.params
    try {
        const User= await user.findByIdAndUpdate(id,req.body,{
         new:true   
        })
        return res.json({
            msg:"Actualizado con exito",User
        })
    } catch (error) {
        return res.status(500).json({
            msg:"Error al actualizar el usuario",error 
        })
    }
}
const remove =async(req,res) =>{
    const {id}=req.params;
try {
    const User= await user.findByIdAndDelete(id)
    return res.json({
        msg:"Eliminado con exito",User
    })
} catch (error) {
    return res.status(500).json({
        msg:"Error al eliminar el usurio",error

    })
}
}
export {
    create,remove,readById,read,update,login
}