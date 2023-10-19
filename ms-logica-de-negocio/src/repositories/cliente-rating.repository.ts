import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {ClienteRating, ClienteRatingRelations} from '../models';

export class ClienteRatingRepository extends DefaultCrudRepository<
  ClienteRating,
  typeof ClienteRating.prototype.id,
  ClienteRatingRelations
> {
  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource,
  ) {
    super(ClienteRating, dataSource);
  }
}
