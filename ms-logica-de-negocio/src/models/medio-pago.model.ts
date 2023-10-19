import {Entity, model, property} from '@loopback/repository';

@model()
export class MedioPago extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
  })
  Tipo?: string;

  @property({
    type: 'string',
  })
  Nombre?: string;


  constructor(data?: Partial<MedioPago>) {
    super(data);
  }
}

export interface MedioPagoRelations {
  // describe navigational properties here
}

export type MedioPagoWithRelations = MedioPago & MedioPagoRelations;
