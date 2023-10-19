import {Entity, model, property} from '@loopback/repository';

@model()
export class ConductorRating extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: false,
  })
  Puntuacion: string;

  @property({
    type: 'date',
  })
  Fecha?: string;

  @property({
    type: 'string',
  })
  Comentario?: string;


  constructor(data?: Partial<ConductorRating>) {
    super(data);
  }
}

export interface ConductorRatingRelations {
  // describe navigational properties here
}

export type ConductorRatingWithRelations = ConductorRating & ConductorRatingRelations;
