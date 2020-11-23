import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DepartmentsController {
    /**
     * Return all posts
     */
    public async index ({ response }: HttpContextContract) {
        return response.status(201).json({})
    }
}
