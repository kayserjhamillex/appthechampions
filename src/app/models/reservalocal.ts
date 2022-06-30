import { Title } from '@angular/platform-browser';

export interface ReservaLocal {
  id?: number,
  FechaReservaLocal?: Date,
  Estado?: string,
  Pago?: string,
  Total?: string,
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
