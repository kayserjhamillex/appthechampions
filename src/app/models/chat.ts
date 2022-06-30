import { Title } from '@angular/platform-browser';

export interface Chat {
  id?: number,
  FechaCreacion?: Date,
  Estado?: string,
  AdminId?: number,
  ClienteId?: number
}
