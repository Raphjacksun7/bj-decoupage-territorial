import { BaseModel, column, HasMany, hasMany, hasManyThrough, HasManyThrough } from '@ioc:Adonis/Lucid/Orm'
import District from 'App/Models/District'
import Town from 'App/Models/Town'
import Neighborhood from 'App/Models/Neighborhood'

export default class Department extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @hasMany(() => Town, {
    foreignKey: 'department_id',
  })
  public towns: HasMany<typeof Town>

  @hasManyThrough([() => District, () => Town], {
    localKey: 'id',
    foreignKey: 'department_id',
    throughLocalKey: 'id',
    throughForeignKey: 'town_id'
  })
  public districts: HasManyThrough<typeof District>
}
