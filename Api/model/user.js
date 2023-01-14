import mongoose, { model } from "mongoose";


const userSchema= new mongoose.Schema({
    nombre:String,
apellidos:String,
Fecha_de_nacimiento:String,
DNI:String,
teléfono:Number,
correo:String,
dirección:String,
Contraseña:String,
Personas_de_contacto:String
})

export default mongoose.model("user",userSchema)