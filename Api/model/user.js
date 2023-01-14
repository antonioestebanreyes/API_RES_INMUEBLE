import mongoose from "mongoose";
import { string } from "prop-types";

const itemSchema= new mongoose.Schema({
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