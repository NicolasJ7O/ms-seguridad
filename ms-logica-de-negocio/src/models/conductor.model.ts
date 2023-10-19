import {Entity, model, property} from '@loopback/repository';

@model()
export class Conductor extends Entity {
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
  PrimerNombre: string;

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
  Calificacion?: number;

  @property({
    type: 'boolean',
  })
  Bloqueo?: boolean;

  @property({
    type: 'string',
  })
  ComentarioBloqueo?: string;


  constructor(data?: Partial<Conductor>) {
    super(data);
  }
}

export interface ConductorRelations {
  // describe navigational properties here
}

export type ConductorWithRelations = Conductor & ConductorRelations;
