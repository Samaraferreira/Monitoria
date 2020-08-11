import { Request, Response } from 'express'

import Teacher from '@models/Teacher'

import convertStringToArray from '../utils/convertStringToArray'

export default class TeachersController {
  async index (request: Request, response: Response) {
    const { subject } = request.query

    const teachers = await Teacher.find({ subjects: subject })

    return response.json(teachers)
  }

  async create (request: Request, response: Response) {
    const { filename } = request.file
    const {
      name,
      email,
      whatsapp,
      bio,
      subjects,
      topics
    } = request.body

    const convertedSubjects = convertStringToArray(subjects)
    const convertedTopics = convertStringToArray(topics)

    try {
      await Teacher.create({
        name,
        email,
        avatar: filename,
        whatsapp,
        bio,
        subjects: convertedSubjects,
        topics: convertedTopics
      })

      return response.status(201).send()
    } catch {
      return response.status(400).json({
        error: 'Unexpected error while creating new teacher'
      })
    }
  }
}
