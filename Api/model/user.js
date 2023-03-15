import mongoose, { model } from "mongoose";


const userSchema= new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
    },
apellidos:{
    type:String,
    required:true,
},
Fecha_de_nacimiento:{
    type:String,
    required:true
},
DNI:{
    type:String,
    required:true
},
teléfono:{
    type:Number,
    required:true
},
correo:{
    type:String,
    required:true,
    unique:true
// Unique es para que se unico el correo y non se repita
},
dirección:{
    type:String,
    required:true,
},
Contraseña:{
    type:String,
    required:true,
},
Personas_de_contacto:String
})

export default mongoose.model("user",userSchema)