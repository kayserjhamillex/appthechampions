import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Recover } from 'src/app/models/recover';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})
export class RecoverComponent implements OnInit {
  correo = '';
  admin: Recover = {
    id: 0,
    Fullname: '',
    Correo: '',
    Contrasena: '',
    Codigo: '',
    Bandera: ''
  };
  respuesta: any = [];
  mensaje: any;
  caracteres = 'Aa0BbCc1DdEe2FfGgHh3IiJj4KkLl5MmNn6OoPp7QqRr8SsTt9UuVv*WwXxYyZz$';
  laclave;
  long = 10;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private adminService: AdminService
  ) { }
  // tslint:disable-next-line: typedef
  getNumero(min, max) {
    return Math.floor( Math.random() * ( max - min ) ) + min;
  }
  // tslint:disable-next-line: typedef
  generaryenviar(par) {
    const elcodigo = par;
    let numero;
    let clave = '';
    /*creacion de clave*/
    for ( let i = 0; i < this.long; i++)
    {
      numero = this.getNumero( 0, this.caracteres.length );
      clave += this.caracteres.substring( numero, numero + 1 );
      this.laclave = clave;
      console.log(clave);
    }
  }
  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  confirmar() {
    let numero;
    let clave = '';
    /*creacion de clave*/
    for ( let i = 0; i < this.long; i++)
    {
      numero = this.getNumero( 0, this.caracteres.length );
      clave += this.caracteres.substring( numero, numero + 1 );
      this.laclave = clave;
      console.log(clave);
    }
    console.log(this.correo);
    this.adminService.getSearch(this.correo).subscribe(
      res => {
        if (res) {
          this.admin = res;
          const codigo = this.admin.id.toString();
          console.log(this.laclave);
          this.admin.Bandera = 'activado';
          this.admin.Codigo = this.laclave;
          this.adminService.updateAdminrecover(codigo, this.admin).subscribe(
            recover => {
              if (recover !== null) {
                this.mensaje = recover;
                this.adminService.getRecover(codigo).subscribe(
                  // tslint:disable-next-line: no-shadowed-variable
                  res => {
                    this.respuesta = res;
                    this.toastr.success('Por favor Confirme la actualizacion en su correo');
                    this.router.navigate(
                      [
                        'auth',
                        'password',
                        codigo
                      ]
                    );
                  },
                  err => {
                    this.toastr.error('No se pudo enviar el Correo');
                  }
                );
              } else {
                this.toastr.warning('No se pudo actualizar');
              }

            },
            error => {
              console.log('Error Api');
            }
          )
        } else {
          this.toastr.error('Correo no es de la empresa');
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
