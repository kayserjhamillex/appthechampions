import { Observable } from 'rxjs';
import { Eligv } from '../models/eligv';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './variable.service';

@Injectable({
  providedIn: 'root'
})
export class EligvService {
  apiUrl = this.global.apiUrlGlobal + '/eligv';
  constructor(
    private http: HttpClient,
    private global: GlobalService
  ) { }
  getigvs() {
    return this.http.get(`${this.apiUrl}`);
  }

  getigv(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteEligv(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveEligv( Eligv: Eligv) {
    return this.http.post(`${this.apiUrl}/create`, Eligv);
  }

  getreservaigv(id: string) {
    return this.http.get(`${this.apiUrl}/reserva/${id}`);
  }

  updateEligv(id: string|number, updatedEligv: Eligv): Observable<Eligv> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedEligv);
  }

}
