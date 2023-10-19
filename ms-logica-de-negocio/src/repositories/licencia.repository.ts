import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Licencia, LicenciaRelations} from '../models';

export class LicenciaRepository extends DefaultCrudRepository<
  Licencia,
  typeof Licencia.prototype._id,
  LicenciaRelations
> {
  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource,
  ) {
    super(Licencia, dataSource);
  }
}
