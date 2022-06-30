import { Title } from '@angular/platform-browser';

export interface Horario {
  id?: number,
  Dia?: string,
  FieldId?: number,
  HoraId?: number,
  hora: {
    id?: number,
    Horainicio?: string,
    Horafin?: string,
    Turno?: string
  },
  field: {
    id?: number,
    Name?: string
  },
}
