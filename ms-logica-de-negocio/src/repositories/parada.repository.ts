import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Parada, ParadaRelations} from '../models';

export class ParadaRepository extends DefaultCrudRepository<
  Parada,
  typeof Parada.prototype.id,
  ParadaRelations
> {
  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource,
  ) {
    super(Parada, dataSource);
  }
}
