import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {ConductorRating, ConductorRatingRelations} from '../models';

export class ConductorRatingRepository extends DefaultCrudRepository<
  ConductorRating,
  typeof ConductorRating.prototype.id,
  ConductorRatingRelations
> {
  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource,
  ) {
    super(ConductorRating, dataSource);
  }
}
