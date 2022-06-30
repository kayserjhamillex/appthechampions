import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Reservita } from '../models/reservita';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './variable.service';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  apiUrl = this.global.apiUrlGlobal + '/reserva';
  apiUrldominio = this.global.apiUrlGlobal + '/live';
  constructor(
    private http: HttpClient,
    private global: GlobalService
  ) { }

  // tslint:disable-next-line: typedef
  getReservas() {
    return this.http.get(`${this.apiUrl}`);
  }

  // tslint:disable-next-line: typedef
  gettopayReserva() {
    return this.http.get(`${this.apiUrl}/search/topay`);
  }

  // tslint:disable-next-line: typedef
  getReserva(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: typedef
  getHome(codigofield: string) {
    return this.http.get(`${this.apiUrl}/search/home/${codigofield}`);
  }

  // tslint:disable-next-line: typedef
  GetReservationSend(codigo: string) {
    return this.http.get(`${this.apiUrldominio}/sport/gmailreserva/${codigo}`);
  }

  // tslint:disable-next-line: typedef
  GetPostponementSend(codigo: string) {
    return this.http.get(`${this.apiUrldominio}/sport/gmailpostergar/${codigo}`);
  }

  // tslint:disable-next-line: typedef
  getClientBooking(codigoclient: string) {
    return this.http.get(`${this.apiUrl}/search/client/${codigoclient}`);
  }

  // tslint:disable-next-line: typedef
  deleteReserva(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: typedef
  saveReserva( reserva: Reservita) {
    return this.http.post(`${this.apiUrl}/create/create`, reserva);
  }

  updateReserva(id: string, updatedReserva: Reservita): Observable<Reservita> {
    return this.http.put(`${this.apiUrl}/update/update/${id}`, updatedReserva);
  }

  // tslint:disable-next-line: typedef
  getReservaDia(lafecha: string) {
    return this.http.get(`${this.apiUrldominio}/thechampions/report/escritorio/${lafecha}`);
  }

}
