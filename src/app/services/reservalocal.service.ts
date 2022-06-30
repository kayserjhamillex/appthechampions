import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './variable.service';
import { ReservaLocalito } from '../models/reservalocalito';

@Injectable({
  providedIn: 'root'
})
export class ReservaLocalService {
  apiUrl = this.global.apiUrlGlobal + '/local';
  apiUrldominio = this.global.apiUrlGlobal + '/live';
  constructor(
    private http: HttpClient,
    private global: GlobalService
  ) { }

  getLocals() {
    return this.http.get(`${this.apiUrl}`);
  }

  getLocal(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getHome(codigofield: string) {
    return this.http.get(`${this.apiUrl}/search/home/${codigofield}`);
  }

  GetReservationSend(codigo: string) {
    return this.http.get(`${this.apiUrldominio}/local/gmailreserva/${codigo}`);
  }

  GetPostponementSend(codigo: string) {
    return this.http.get(`${this.apiUrldominio}/local/gmailpostergar/${codigo}`);
  }

  deleteLocal(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveLocal( reservalocal: ReservaLocalito) {
    return this.http.post(`${this.apiUrl}/create/create`, reservalocal);
  }

  updateLocal(id: string, updatedReservalocal: ReservaLocalito): Observable<ReservaLocalito> {
    return this.http.put(`${this.apiUrl}/update/update/${id}`, updatedReservalocal);
  }
}
