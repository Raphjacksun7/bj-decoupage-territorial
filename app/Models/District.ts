import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Neighborhood from 'App/Models/Neighborhood'

export default class District extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column({ serializeAs: null })
  public town_id: number

  @hasMany(() => Neighborhood, {
    foreignKey: 'district_id',
  })
  public neighborhoods: HasMany<typeof Neighborhood>
}
