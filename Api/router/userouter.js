 import express from 'express'
import { create,read,remove ,update,readById,} from '../controller/usercontroller.js'
const router=express.Router()
router.route('/user/creado').post(create) 
router.route('/user/eliminado/:id').delete(remove)
router.route('/user/actualizado/:id').put(update)
router.route('/user').get(read)
router.route('/user/id/:id').get(readById)
export default router