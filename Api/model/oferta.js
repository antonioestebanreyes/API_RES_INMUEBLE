import mongoose from 'mongoose'
const ofrectaSchema=new mongoose.Schema({
    Nombre:String,
    Correo:String,
    Teléfono:Number,
    Mensaje:String
})


export default mongoose.model("oferta",ofrectaSchema)