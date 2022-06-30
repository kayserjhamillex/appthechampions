import { Title } from '@angular/platform-browser';

export interface Reservita {
  id?: number,
  FechaReserva?: Date,
  Estado?: string,
  Pago?: string,
  AdminId?: number,
  ClienteId?: number,
}
