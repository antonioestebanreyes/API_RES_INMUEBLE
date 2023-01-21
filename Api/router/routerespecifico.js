import express from 'express'
import  {searchDePrecio,searchPais,serachRango} from '../controller/inmueblecontroller.js'
const router=express.Router()
router.route('/inmuebles/precio').get(searchDePrecio)
router.route('/inmuebles/pais').get(searchPais)
router.route('/inmubles/rango/precio').get(serachRango)
export default router
