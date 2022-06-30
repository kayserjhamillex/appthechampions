import { Title } from '@angular/platform-browser';

export interface Testimonio {
  id?: number,
  Testimonio?: string,
  ClienteId?: number,
  cliente: {
    id?: number,
    Fullname?: string,
    ImagenCliente?: string,
  },
}
