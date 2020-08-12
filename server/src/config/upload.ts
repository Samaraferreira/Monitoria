import path from 'path'
import multer from 'multer'
import crypto from 'crypto'

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp')

export default {
  directory: tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename (request, file, callback) {
      crypto.randomBytes(16, (err, hash) => {
        if (err) {
          callback(err, file.filename)
        }

        const filename = `${hash.toString('hex')}-${file.originalname}`

        callback(null, filename)
      })
    }
  })
}
