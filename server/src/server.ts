import * as dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import path from 'path'

import routes from './routes'

dotenv.config()

const app = express()

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))
app.use(routes)

app.listen(process.env.PORT || 3333, () => {
  console.log('rodouuuu')
})
