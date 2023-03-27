import mongoose from "mongoose"
const inmuebleSchema=new mongoose.Schema({
 calle:String,
Numero_externo:Number,
Numero_interior:Number,
    Zip_Code:Number,
    Ciudad:String,
    País:String,
    Localidad:String,
    tipo_de_oferta:String,
    precio:Number,
    Descripción:String,
    Numero_de_recámaras:String,
    Fotos_del_domicilio:String,
    

})

export default mongoose.model("inmueble",inmuebleSchema)