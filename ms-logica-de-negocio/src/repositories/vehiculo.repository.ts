import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Vehiculo, VehiculoRelations} from '../models';

export class VehiculoRepository extends DefaultCrudRepository<
  Vehiculo,
  typeof Vehiculo.prototype._id,
  VehiculoRelations
> {
  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource,
  ) {
    super(Vehiculo, dataSource);
  }
}
