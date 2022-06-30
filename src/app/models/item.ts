import { Title } from '@angular/platform-browser';

export interface Item {
  id?: number,
  Estado?: string,
  HorarioId?: number,
  ReservaId?: number,
  horario: {
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
  },
  reserva: {
    id?: number,
    FechaReserva?: Date,
    Estado?: string,
    Pago?: string,
    AdminId?: number,
    ClienteId?: number,
    admin: {
      id?: number,
      Fullname?: string,
      Correo?: string,
    },
    cliente: {
      id?: number,
      Fullname?: string,
      Numerodocumento?: string,
      Email?: string
    }
  }
}
