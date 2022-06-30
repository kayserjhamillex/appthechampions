import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './variable.service';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  apiUrl = this.global.apiUrlGlobal + '/report';
  constructor(
    private http: HttpClient,
    private global: GlobalService
  ) { }
  // reporte numero 1
  getcliente(fecha1: string, fecha2: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/cliente/${fecha1}/${fecha2}`);
  }
  // reporte numero 2
  getadmin(fecha1: string, fecha2: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/${fecha1}/${fecha2}`);
  }

  // reporte numero 3
  getestado(fecha1: string, fecha2: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/estado/${fecha1}/${fecha2}`);
  }

  // reporte numero 4
  getdetalleestado(fecha1: string, fecha2: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/detallado/${fecha1}/${fecha2}`);
  }

  // reporte numero 5
  getflujocaja(fecha1: string, fecha2: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/flujocaja/${fecha1}/${fecha2}`);
  }

  // reporte numero 5
  getrepodia(fecha: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/repodia/${fecha}`);
  }

  // reporte numero 4
  getestadolocal(fecha1: string, fecha2: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/localestado/${fecha1}/${fecha2}`);
  }

  // reporte numero 5
  getclientelocal(fecha1: string, fecha2: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/localcustomer/${fecha1}/${fecha2}`);
  }
  // los demas reportes ...
}
