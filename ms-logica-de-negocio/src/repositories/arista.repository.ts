import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Arista, AristaRelations} from '../models';

export class AristaRepository extends DefaultCrudRepository<
  Arista,
  typeof Arista.prototype.id,
  AristaRelations
> {
  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource,
  ) {
    super(Arista, dataSource);
  }
}
