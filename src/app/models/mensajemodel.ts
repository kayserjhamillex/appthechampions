import { Title } from '@angular/platform-browser';

export interface Mensajemodel {
  id?: number,
  FechaEnvio?: Date,
  HoraEnvio?: Date,
  Mensaje?: string,
  Direccion?: string,
  ChatId?: number,
  chat?: {
    id?: number,
    FechaCreacion?: Date,
    Estado?: string,
    AdminId?: number,
    ClienteId?: number,
    cliente?: {
      id?: number,
      Fullname?: string,
      ImagenCliente?: string
    }
  }
}
