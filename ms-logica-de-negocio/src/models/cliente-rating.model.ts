import {Entity, model, property} from '@loopback/repository';

@model()
export class ClienteRating extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
  })
  Puntuacion?: number;

  @property({
    type: 'date',
  })
  Fecha?: string;

  @property({
    type: 'string',
  })
  Comentario?: string;


  constructor(data?: Partial<ClienteRating>) {
    super(data);
  }
}

export interface ClienteRatingRelations {
  // describe navigational properties here
}

export type ClienteRatingWithRelations = ClienteRating & ClienteRatingRelations;
