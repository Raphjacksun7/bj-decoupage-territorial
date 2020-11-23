import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany, HasManyThrough, hasManyThrough } from '@ioc:Adonis/Lucid/Orm'
import District from 'App/Models/District'
import Department from 'App/Models/Department'
import Neighborhood from 'App/Models/Neighborhood'

export default class Town extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column({ serializeAs: null })
  public department_id: number

  @belongsTo(() => Department, {
    foreignKey: 'department_id',
  })
  public department: BelongsTo<typeof Department>

  @hasMany(() => District, {
    foreignKey: 'town_id',
  })
  public districts: HasMany<typeof District>

  @hasManyThrough([() => Neighborhood, () => District], {
    localKey: 'id',
    foreignKey: 'town_id',
    throughLocalKey: 'id',
    throughForeignKey: 'district_id'
  })
  public neighborhoods: HasManyThrough<typeof Neighborhood>
}
