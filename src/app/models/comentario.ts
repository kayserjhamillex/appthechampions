import { Title } from '@angular/platform-browser';

export interface Comentario {
  id?: number,
  Comentario?: string,
  BlogId?: number,
  ClienteId?: number,
  blog: {
    id?: number,
    Titulo?: string,
  },
  cliente: {
    id?: number,
    Fullname?: string,
    ImagenCliente?: string,
  },
}
