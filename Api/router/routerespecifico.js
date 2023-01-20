import express from 'express'
import  {searchDePrecio,searchPais} from '../controller/inmueblecontroller.js'
const router=express.Router()
router.route('/inmuebles/precio').get(searchDePrecio)
router.route('/inmuebles/pais').get(searchPais)
export default router
