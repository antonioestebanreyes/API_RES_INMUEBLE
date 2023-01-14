import express from 'express'
import inmueblecontroller from '../Api/router/routerinmueble.js'
import ofertacontroller from '../Api/router/routerOferta.js'
import routerespecifico from '../Api/router/routerespecifico.js'
import routeruser from '../Api/router/userouter.js'
const api=express();
api.use(express.json());
api.get('/status',(_,res)=>{
    res.json({
        msg:'api linia,exitosa.....'
    })
})

api.use(inmueblecontroller)
api.use(ofertacontroller)
api.use(routerespecifico)
api.use(routeruser)

export default api