import mongoose, { model } from "mongoose";


const userSchema= new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        maxlength:[50,"El nombre no de exeder mas de los 50 palabra"]
    },
apellidos:{
    type:String,
    required:true,
    maxlength:[50,'El apelido no de exeder mas de 50 palabra']
},
Fecha_de_nacimiento:{
    type:String,
    required:true,
    maxlength:[5,"La fecha de nacimiento de debe exeder mas de los 5 caracteres"]
},
DNI:{
    type:String,
    required:true
},
teléfono:{
    type:Number,
    required:true,
    maxlength:[10,"El nuemro de telefono no debe exeder mas de 10 numeros"]
},
correo:{
    type:String,
    required:[true,"El correo es requerido"],
    unique:[true,"el correo no debe esta duplicado"],
    maxlength:[100,"el correo no puede tener menmos de 100 caracteres"],
    match:[/.+\@.+\..+/,"este correo es invalida, por favor ingrese correo correcto"]
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
Personas_de_contacto:String,
rol:{
    type:String,
    default: 'usurio'
}

})

export default mongoose.model("user",userSchema)