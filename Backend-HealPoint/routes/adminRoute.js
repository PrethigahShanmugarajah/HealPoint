import express from 'express'
import { addDoctor } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'

const adminRoute = express.Router()

adminRoute.post('/add-doctor', upload.single('image'), addDoctor)

export default adminRoute