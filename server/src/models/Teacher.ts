import mongoose, { Schema, Document } from 'mongoose'

export interface ITeacher extends Document {
  name: string;
  email: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subjects: Array<string>;
  topics?: Array<string>;
}

const TeacherSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatar: { type: String, required: true },
  whatsapp: { type: String, required: true },
  bio: { type: String, required: true },
  subjects: { type: Array, required: true },
  topics: { type: Array }
}, {
  toJSON: {
    virtuals: true
  }
})

TeacherSchema.virtual('avatar_url').get(function () {
  return `http://localhost:3333/files/${this.avatar}`
})

export default mongoose.model<ITeacher>('Teacher', TeacherSchema)
