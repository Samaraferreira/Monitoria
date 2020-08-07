import path from 'path'
import multer from 'multer'

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp')

export default {
  directory: tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename (request, file, callback) {
      const fileHash = Math.floor(Math.random() * 500) * 100
      const filename = `${fileHash}-${file.originalname}`

      return callback(null, filename)
    }
  })
}
