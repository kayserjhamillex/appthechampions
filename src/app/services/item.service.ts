import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Itemcito } from '../models/itemcito';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './variable.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  apiUrl = this.global.apiUrlGlobal + '/item';
  constructor(
    private http: HttpClient,
    private global: GlobalService
  ) { }

  getItems() {
    return this.http.get(`${this.apiUrl}`);
  }

  getItem(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getdisponibilidad(dia: string, field: string) {
    return this.http.get(`${this.apiUrl}/disponibilidad/${dia}/${field}`);
  }

  getHome(reserva: string) {
    return this.http.get(`${this.apiUrl}/search/home/${reserva}`);
  }

  getbookcliente(cliente: string, reserva: string) {
    return this.http.get(`${this.apiUrl}/search/client/${cliente}/${reserva}`);
  }

  deleteItem(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveItem( Item: Itemcito) {
    return this.http.post(`${this.apiUrl}/create/create`, Item);
  }

  updateItem(id: string, updatedItem: Itemcito): Observable<Itemcito> {
    return this.http.put(`${this.apiUrl}/update/update/${id}`, updatedItem);
  }
}
