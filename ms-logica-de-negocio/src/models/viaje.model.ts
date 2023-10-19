import {Entity, model, property} from '@loopback/repository';

@model()
export class Viaje extends Entity {
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
  Origen: string;

  @property({
    type: 'string',
    required: true,
  })
  Destino: string;

  @property({
    type: 'number',
    required: true,
  })
  Costo: number;

  @property({
    type: 'number',
    required: true,
  })
  KMRecorridos: number;


  constructor(data?: Partial<Viaje>) {
    super(data);
  }
}

export interface ViajeRelations {
  // describe navigational properties here
}

export type ViajeWithRelations = Viaje & ViajeRelations;
