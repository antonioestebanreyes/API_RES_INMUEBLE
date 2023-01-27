import express from 'express'
import  {create,read,readById,update,remove} from '../controller/inmueblecontroller.js'
const router=express.Router();
router.route('/inmueble').post(create)
router.route('/inmueble').get(read)
router.route('/inmueble/:id').get(readById)
router.route('/inmueble/:id').put(update)
router.route ('/inmueble/:id').delete(remove)


export default router
