import { Storage } from '@google-cloud/storage'
import path from 'path'

const storage = new Storage({
  keyFilename: path.resolve(__dirname, '..', '..', 'monitoria.json'),
  projectId: process.env.CLOUD_PROJECT_ID
})

const bucket = storage.bucket('files-monitoria')

async function uploadFile (file) {
  await bucket.upload(file.path)
}

export default uploadFile
