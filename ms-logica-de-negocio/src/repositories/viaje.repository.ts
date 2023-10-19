import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Viaje, ViajeRelations} from '../models';

export class ViajeRepository extends DefaultCrudRepository<
  Viaje,
  typeof Viaje.prototype.id,
  ViajeRelations
> {
  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource,
  ) {
    super(Viaje, dataSource);
  }
}
