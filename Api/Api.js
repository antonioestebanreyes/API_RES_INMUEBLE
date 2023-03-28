import express from 'express'
import inmueblecontroller from '../Api/router/routerinmueble.js'
import ofertacontroller from '../Api/router/routerOferta.js'
import routerespecifico from '../Api/router/routerespecifico.js'
import routeruser from '../Api/router/userouter.js'
import routeuser from '../Api/router/userouter.js'
import { auth } from './middlewares/authValidator.js';
//import { Authadmit } from './middlewares/authAdmi.js';
const api=express();
api.use(express.json());
api.get('/status',(_,res)=>{
    res.json({
        msg:'api linia,exitosa.....'
    })
})

//checar la ruta 
api.use(routeruser)
api.use(routeuser )
api.use(routerespecifico)
api.use("/inmueble",auth,inmueblecontroller)
api.use( ofertacontroller )

export default api