import { Observable } from 'rxjs';
import { Field } from '../models/field';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './variable.service';

@Injectable({
  providedIn: 'root'
})
export class FieldService {
  apiUrl = this.global.apiUrlGlobal + '/field';
  constructor(
    private http: HttpClient,
    private global: GlobalService
  ) { }
  getFields() {
    return this.http.get(`${this.apiUrl}`);
  }

  getField(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteField(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveField(Field: Field) {
    return this.http.post(`${this.apiUrl}/create`, Field);
  }

  updateField(id: string|number, updatedField: Field): Observable<Field> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedField);
  }
}
