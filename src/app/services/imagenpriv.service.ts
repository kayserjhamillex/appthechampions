import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileUploadService {
  URLlogosmall = 'https://vicky-uploadfile.herokuapp.com/smalllogo';
  // URLlogolarge = 'https://vicky-uploadfile.herokuapp.com/largelogo';
  URLfoto = 'https://vicky-uploadfile.herokuapp.com/foto';
  URLbanner = 'https://vicky-uploadfile.herokuapp.com/banner';
  constructor(private http: HttpClient) { }

  uploadfoto(file: File, name: string) {
    // create a new multipart-form for every file
    const formData: FormData = new FormData();
    formData.append(name, file, file.name);
    // retornamos la data del servidor
    return this.http.post(`${this.URLfoto}`, formData);
  }
  uploadbanner(file: File, name: string) {
    // create a new multipart-form for every file
    const formData: FormData = new FormData();
    formData.append(name, file, file.name);
    // retornamos la data del servidor
    return this.http.post(`${this.URLbanner}`, formData);
  }
  uploadlogosmall(file: File, name: string) {
    // create a new multipart-form for every file
    const formData: FormData = new FormData();
    formData.append(name, file, file.name);
    // retornamos la data del servidor
    return this.http.post(`${this.URLlogosmall}`, formData);
  }
  // uploadlogolarge(file: File, name: string) {
  //   // create a new multipart-form for every file
  //   const formData: FormData = new FormData();
  //   formData.append(name, file, file.name);
  //   // retornamos la data del servidor
  //   return this.http.post(`${this.URLlogolarge}`, formData);
  // }
}
