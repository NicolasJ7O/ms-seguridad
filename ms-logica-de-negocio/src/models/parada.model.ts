import {Entity, model, property} from '@loopback/repository';

@model()
export class Parada extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Adyacentes: string;


  constructor(data?: Partial<Parada>) {
    super(data);
  }
}

export interface ParadaRelations {
  // describe navigational properties here
}

export type ParadaWithRelations = Parada & ParadaRelations;
