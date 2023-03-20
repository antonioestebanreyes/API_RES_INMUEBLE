import dotenv from 'dotenv'
dotenv.config(); 
export default {
    server:{
        port:process.env.Port||300,
        
    },
    database:{
        uri:process.env.BD_monsege|| 'mongodb://localhost/test', 
    },
    jwtSecret:{
      Secret: process.env.JWT_SECRET 
    } 
}