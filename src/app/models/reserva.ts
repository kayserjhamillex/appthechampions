import { Title } from '@angular/platform-browser';

export interface Reserva {
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
