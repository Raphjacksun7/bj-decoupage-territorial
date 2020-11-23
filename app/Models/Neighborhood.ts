import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import District from 'App/Models/District'

export default class Neighborhood extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column({ serializeAs: null })
  public district_id: number

  @belongsTo(() => District, {
    foreignKey: 'district_id',
  })
  public district: BelongsTo<typeof District>
}
