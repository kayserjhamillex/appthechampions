import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './variable.service';
import { HorarioTable } from '../models/horariotable';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  apiUrl = this.global.apiUrlGlobal + '/horario';
  constructor(
    private http: HttpClient,
    private global: GlobalService
  ) { }
  getHorarios() {
    return this.http.get(`${this.apiUrl}`);
  }

  getHorario(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getHorarioFieldDia(dia: string, codigo: string) {
    return this.http.get(`${this.apiUrl}/disponibilidad/${dia}/${codigo}`);
  }

  deleteHorario(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveHorario( Horario: HorarioTable) {
    return this.http.post(`${this.apiUrl}/create`, Horario);
  }

  updateHorario(id: string|number, updatedHorario: HorarioTable): Observable<HorarioTable> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedHorario);
  }
}
