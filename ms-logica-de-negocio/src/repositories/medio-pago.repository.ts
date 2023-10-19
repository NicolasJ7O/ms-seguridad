import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {MedioPago, MedioPagoRelations} from '../models';

export class MedioPagoRepository extends DefaultCrudRepository<
  MedioPago,
  typeof MedioPago.prototype._id,
  MedioPagoRelations
> {
  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource,
  ) {
    super(MedioPago, dataSource);
  }
}
