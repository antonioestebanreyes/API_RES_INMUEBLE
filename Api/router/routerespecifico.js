import express from 'express'
import  {searchDePrecio,searchPais,seachEconomico} from '../controller/inmueblecontroller.js'
const router=express.Router()
router.route('/inmuebles/precio').get(searchDePrecio)
router.route('/inmuebles/pais').get(searchPais)
router.route('/inmuebles/precio/economico').get(seachEconomico)
//router.route('/inmubles/rango/precio').get(serachRango)
export default router
