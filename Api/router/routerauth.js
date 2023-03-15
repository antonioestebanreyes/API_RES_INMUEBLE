import express from 'express'
const router=express.Router();
router.route('/Registre').post(create)
export default router