import Department from 'App/Models/Department'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class DepartmentsController {
    /**
     * Return all departments
     */
    public async index ({ response }: HttpContextContract) {
        return response.status(200)
            .json({
                'departments': await Department.all()
            })
    }

    /**
     * Return all department's towns
     */
    public async getTowns ({ response, params }: HttpContextContract) {
        let department = new Department

        if (!isNaN(params.search)) {
            department = await Department.findOrFail(params.search)
        }

        if (isNaN(params.search)) {
            department = await Department.findByOrFail(
                'name', params.search.toUpperCase()
            )
        }

        const towns = await department.related('towns').query()
        
        return response.status(200)
            .json({
                'department': department.name,
                towns
            })
    }

    /**
     * Return all department's districts
     */
    public async getDistricts ({ response, params }: HttpContextContract) {
        let department = new Department

        if (!isNaN(params.search)) {
            department = await Department.findOrFail(params.search)
        }

        if (isNaN(params.search)) {
            department = await Department.findByOrFail(
                'name', params.search.toUpperCase()
            )
        }

        const districts = await department.related('districts').query()
        
        return response.status(200)
            .json({
                'department': department.name,
                districts
            })
    }

    /**
     * Return all department's neighborhoods
     */
    public async getNeighborhoods ({ response, params }: HttpContextContract) {
        let department = new Department

        if (!isNaN(params.search)) {
            department = await Department.findOrFail(params.search)
        }

        if (isNaN(params.search)) {
            department = await Department.findByOrFail(
                'name', params.search.toUpperCase()
            )
        }

        const neighborhoods = await Database.from('neighborhoods')
                .select('neighborhoods.id', 'neighborhoods.name')
                .innerJoin('districts', 'districts.id', 'neighborhoods.district_id')
                .innerJoin('towns', 'towns.id', 'districts.town_id')
                .innerJoin('departments', 'departments.id', 'towns.department_id')
                .where('departments.name', department.name)
        
        return response.status(200)
            .json({
                'department': department.name,
                neighborhoods
            })
    }
    
}
