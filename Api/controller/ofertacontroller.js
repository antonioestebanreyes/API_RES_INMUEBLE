import oferta from '../model/oferta.js'
const create=async (req,res) =>{
    try {
        const ofretas=await oferta.create(req.body)
        return res.json({
            msg:"oferta creata satifacria mente",ofretas
            
        })
    } catch (error) {
        return res.status(500).json({
            msg:"Ocurrio un error"
        })
    }
}
export default create