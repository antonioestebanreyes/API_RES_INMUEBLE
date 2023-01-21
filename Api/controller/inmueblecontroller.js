import inmueble from '../model/inmueble.js'
const create= async (req,res) =>{
    try {
        const Imueble=await inmueble.create(req.body)
        return res.json({
            msg:'item create satisfatotrio mente ',Imueble
        })
        
    } catch (error) {
        return res.status(500).json({
            mgs:"Ocurrio un error"
        })
    }
}
const read= async (req,res)=>{
    try {

        const Imueble=await inmueble.find(req.query)
        return res.json({
            msg:'Inmueble encontrad',
            Imueble
        })
    } catch (error) {
      return res.status(500).json({
        msg:'Error al buscar inmueble',error
      })  
    }
}


   
 
const readById=async (req,res)=>{

    const {id}=req.params;
try {
    const Inmueble= await inmueble.findById(id)

       

    return res.json({
        msg:"Actualizar",Inmueble
    })
} catch (error) {
    return res.json({
        msg:"Error al buscar pr id ",error,
    })
}
}

const update=async (req,res)=>{
const {id}=req.params;
try {
    const Inmueble=await inmueble.findByIdAndUpdate(id,req.body,{
        new:true
    })
    return res.json({
        msg:"Actualizar exitosa",Inmueble
    })
} catch (error) {
    return res.status(500).json({
        mgs:"Error al actualiazra el inmueble",error
    })
}
}
const remove = async (req,res)=>{
    const {id}=req.params;
    try {
        const Inmueble=await inmueble.findByIdAndDelete(id)
       return res.json({
msg:"Eliminado con exito",Inmueble
    })  
    }
     catch (error) {
        res.status(500).json({
            msg:"Error al eliminar",error
        })
    }
}


async function searchDePrecio (req,res){
    const {precio}=req.body;
   console.log("este es precio",precio);
   console.log(res);
    try {
 const Inmueble=await inmueble.find(
    {  precio: {  $eq:precio }}
)
    return res.json({
            msg:Inmueble
        })



    } catch (error) {
        return res.status(500).json({
            msg:'Error al buscar inmueble',error
      
      })  
    }
  } 

  const searchPais= async(req,res)=>{
    
    const { País}=req.body;
    console.log("este es precio", País);
    console.log(res);
     try {
  const Inmueble=await inmueble.find(
     { País: { $eq: País } }
 )
     return res.json({
             msg:Inmueble
         })
 
 
 
     } catch (error) {
         return res.status(500).json({
             msg:'Error al buscar inmueble',error
       
       })  
     }
  }
const serachRango= async(req,res)=>{
const {precio}=req.body
try {
    const Imueble= await inmueble.find(
        {
            precio:{$gt:precio}
        }
    )
    return res.json({
        msg:"Rango de precio con exito",Imueble
    })
} catch (error) {
   return res.status(500).json({
    msg:'Error al buscar',error
   }) 
}
}
export {
    read,create,readById,update,remove,searchDePrecio,searchPais,serachRango
}