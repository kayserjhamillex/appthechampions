import { Title } from '@angular/platform-browser';

export interface Chatmodel {
  id?: number,
  FechaCreacion?: Date,
  Estado?: string,
  AdminId?: number,
  ClienteId?: number,
  admin?: {
    id?: number,
    Fullname?: string
  },
  cliente?: {
    id?: number,
    Fullname?: string,
    ImagenCliente?: string
  }
}
