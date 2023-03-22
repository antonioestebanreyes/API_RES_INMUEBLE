import express from 'express'
import inmueblecontroller from '../Api/router/routerinmueble.js'
import ofertacontroller from '../Api/router/routerOferta.js'
import routerespecifico from '../Api/router/routerespecifico.js'
import routeruser from '../Api/router/userouter.js'
import routeuser from '../Api/router/userouter.js'
import { auth } from './middlewares/authValidator.js';
const api=express();
api.use(express.json());
api.get('/status',(_,res)=>{
    res.json({
        msg:'api linia,exitosa.....'
    })
})


api.use(routeruser)
api.use(routeuser )
api.use(routerespecifico)
api.use(auth,inmueblecontroller)
api.use( auth,ofertacontroller )

export default api