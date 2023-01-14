 import express from 'express'
import { create } from '../controller/usercontroller.js'
const router=express.Router()
router.route('/user/creado').post(create) 

export default router