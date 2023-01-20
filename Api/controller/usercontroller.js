
import user from '../model/user.js'
const create = async (req,res)=>{
    try {
        const User=await user.create(req.body)
        return res.json({
            msg:'user creado con exito',User
        })
    } catch (error) {
        return res.status(500).json({
            msg:"Ocurrio un error al crear el user"
        })
    }
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
    create,remove,readById,read,update
}