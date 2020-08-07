import express from 'express'
import multer from 'multer'
import uploadConfig from '@config/upload'

import TeacherController from './controllers/TeacherController'

const routes = express.Router()
const upload = multer(uploadConfig)

const teacherController = new TeacherController()

routes.get('/teachers', teacherController.index)
routes.post('/teachers', upload.single('avatar'), teacherController.create)

export default routes
