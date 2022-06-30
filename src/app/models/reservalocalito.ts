import { Title } from '@angular/platform-browser';

export interface ReservaLocalito {
  id?: number,
  FechaReservaLocal?: Date,
  Estado?: string,
  Pago?: string,
  Total?: string,
  AdminId?: number,
  ClienteId?: number
}
