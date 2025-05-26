import express from 'express'
import { verification } from '../middle/verification.js';
const router = express.Router()
router.post('/',verification)
router.get('/', verification)
export default router;