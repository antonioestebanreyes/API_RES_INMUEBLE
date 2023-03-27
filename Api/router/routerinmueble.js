import express from 'express'
import  {create,read,readById,update,remove} from '../controller/inmueblecontroller.js'
const router=express.Router();
router.route('/').post(create)
router.route('/').get(read)
router.route('//:id').get(readById)
router.route('//:id').put(update)
router.route ('//:id').delete(remove)


export default router
