import mongoose from "mongoose";
import confing from './index.js'
const db=mongoose.connection;
db.on('connecting',() =>{
    console.log('conectado a la base de datos ');
})
db.on('conected',()=>{
    console.log('Se ha conectdo enla base de datos');
})
db.on('error',()=>{
    console.log('Se ha conectado en la base de datos ');
})
db.on('eroor',()=>{
    console.log('Eroor al conectarse a la base de datos');
})
export default ()=>{
    mongoose.connect(confing.database.uri)
}