import express from "express"
import routeroferta from '../controller/ofertacontroller.js'
const router =express.Router()
router.route('/oferta').post(routeroferta)
export default router