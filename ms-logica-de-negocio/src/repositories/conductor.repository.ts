import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Conductor, ConductorRelations} from '../models';

export class ConductorRepository extends DefaultCrudRepository<
  Conductor,
  typeof Conductor.prototype.id,
  ConductorRelations
> {
  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource,
  ) {
    super(Conductor, dataSource);
  }
}
