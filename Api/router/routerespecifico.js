import express from 'express'
import  {searchDePrecioAlto,searchPais,seachEconomico} from '../controller/inmueblecontroller.js'
const router=express.Router()
router.route('/inmuebles/precio').get(searchDePrecioAlto)
router.route('/inmuebles/pais').get(searchPais)
router.route('/inmuebles/precio/economico').get(seachEconomico)
export default router
