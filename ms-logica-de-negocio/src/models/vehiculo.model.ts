import {Entity, model, property} from '@loopback/repository';

@model()
export class Vehiculo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Matricula: string;

  @property({
    type: 'string',
  })
  Modelo?: string;

  @property({
    type: 'string',
  })
  Foto?: string;

  @property({
    type: 'string',
  })
  Marca?: string;

  @property({
    type: 'string',
  })
  Color?: string;


  constructor(data?: Partial<Vehiculo>) {
    super(data);
  }
}

export interface VehiculoRelations {
  // describe navigational properties here
}

export type VehiculoWithRelations = Vehiculo & VehiculoRelations;
