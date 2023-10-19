import {Entity, model, property} from '@loopback/repository';

@model()
export class Cliente extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  PrimerNombre: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
    default:  "",
  })
  SegundoNombre?: string;

  @property({
    type: 'string',
    required: true,
  })
  PrimerApellido: string;

  @property({
    type: 'string',
  })
  SegundoApellido?: string;

  @property({
    type: 'number',
  })
  calificacion?: number;

  @property({
    type: 'boolean',
    required: true,
  })
  bloqueo: boolean;

  @property({
    type: 'string',
  })
  comentarioBloqueo?: string;


  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
