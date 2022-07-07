import { ToastrService } from 'ngx-toastr';
import { Recover } from 'src/app/models/recover';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  parametro = {
    contra1: '',
    contra2: ''
  };
  adminrecover: Recover = {
    id: 0,
    Fullname: '',
    Correo: '',
    Contrasena: '',
    Codigo: '',
    Bandera: ''
  };
  dato = '';
  respuesta: any = [];
  confirmado = false;
  mss: any;
  mss1: any;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
  ) { }

  // tslint:disable-next-line: typedef
  actualizar() {
    const params = this.activatedRoute.snapshot.params;
    const codigo = params.id;
    if (this.parametro.contra1 !== '' && this.parametro.contra2 !== '') {
      this.adminrecover.Contrasena = this.parametro.contra1;
      this.adminrecover.Bandera = 'desactivado';
      this.adminrecover.Codigo = '123456789';
      if (this.parametro.contra1 === this.parametro.contra2) {
        console.log(this.adminrecover);
        this.adminService.updateAdminrecover(codigo, this.adminrecover).subscribe(
          res => {
            this.mss = res;
            this.toastr.success('Contraseña actualizada');
            this.router.navigate(
              [
                'auth',
                'login'
              ]
            );
          },
          err => {
            this.toastr.error('no se pudo actualizar');
          }
        );
      } else {
        this.toastr.error('la repeticion de la contraseña es diferente');
      }
    } else if (this.parametro.contra1 === '' && this.parametro.contra2 !== '') {
      this.toastr.warning('Ingresar ambas campos');
    } else if (this.parametro.contra1 !== '' && this.parametro.contra2 === '') {
      this.toastr.warning('Ingresar ambas campos');
    } else if (this.parametro.contra1 === '' && this.parametro.contra2 === '') {
      this.toastr.warning('Ingresar las contraseña');
    }

  }
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.adminService.getAdminrecover(params.id).subscribe(
        res => {
          if (res !== null) {
            console.log(res);
            this.adminrecover = res;
          } else {
            this.toastr.warning('cliente no encotrado');
          }
        },
        err => {
          this.toastr.error('error api');
          console.log(err);
        }
      );
    }
  }
  comprobar(par) {
    console.log(par);
    if (par !== '') {
      if (this.adminrecover.Codigo === par) {
        this.toastr.info('Confirmacion: ponga su nueva contra');
        this.confirmado = true;
      } else {
        this.toastr.warning('Codigo incorrecto');
      }
    } else {
      this.toastr.warning('Por favor introduzca el código');
    }
  }
}
