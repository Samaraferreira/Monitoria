import mongoose, { Schema, Document } from 'mongoose'

export interface ITeacher extends Document {
  name: string;
  email: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subjects: Array<string>;
  topics?: Array<string>;
  createdAt: {
    type: Date,
    default: Date
  }
}

const TeacherSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatar: { type: String, required: true },
  whatsapp: { type: String, required: true },
  bio: { type: String, required: true },
  subjects: { type: Array, required: true },
  topics: { type: Array },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  toJSON: {
    virtuals: true
  }
})

TeacherSchema.virtual('avatar_url').get(function () {
  return `${process.env.CLOUD_PUBLIC_URL}/${process.env.BUCKET_NAME}/${this.avatar}`
})

export default mongoose.model<ITeacher>('Teacher', TeacherSchema)
