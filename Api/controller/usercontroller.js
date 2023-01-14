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
        const User= user.find(req.query)
        return res.json({
            msg:'usurio encontrado',User
        })
    } catch (error) {
        return res.status(500).json({
            msg:'Error al buscar al usuario',error
        })
        
    }
}
export {
    create
}