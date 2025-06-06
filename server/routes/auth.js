import express from 'express'
import { login, logout, OtpVerification, register } from '../controllers/auth.controller.js'
const router = express.Router()
router.post('/register',register)
router.post('/login',login )
router.post('/logout',logout)
router.post('/send_otp', OtpVerification)
export default router;