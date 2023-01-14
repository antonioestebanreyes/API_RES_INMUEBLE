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
export {
    create
}