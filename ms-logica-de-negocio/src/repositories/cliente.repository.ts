import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Cliente, ClienteRelations} from '../models';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype._id,
  ClienteRelations
> {
  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource,
  ) {
    super(Cliente, dataSource);
  }
}
