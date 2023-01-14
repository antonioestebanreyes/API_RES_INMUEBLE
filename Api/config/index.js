import dotenv from 'dotenv'
dotenv.config(); 
export default {
    server:{
        port:process.env.Port||300,
        
    },
    database:{
        uri:process.env.database|| 'mongodb://localhost/test', 
    }
    
}