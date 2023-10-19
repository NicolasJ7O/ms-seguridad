import {Entity, model, property} from '@loopback/repository';

@model()
export class Licencia extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
  })
  Nombres?: string;

  @property({
    type: 'string',
  })
  Apellidos?: string;

  @property({
    type: 'date',
  })
  Vigencia?: string;


  constructor(data?: Partial<Licencia>) {
    super(data);
  }
}

export interface LicenciaRelations {
  // describe navigational properties here
}

export type LicenciaWithRelations = Licencia & LicenciaRelations;
