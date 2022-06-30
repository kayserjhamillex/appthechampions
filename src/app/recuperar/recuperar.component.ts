import { Admin } from '../models/admin';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {
  parametro = {
    contra1: '',
    contra2: ''
  };
  admin: Admin = {
    id: 0,
    Fullname: '',
    Correo: '',
    Contrasena: ''
  };
  admin1: Admin = {
    id: 0,
    Fullname: '',
    Correo: '',
    Contrasena: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
  ) { }

  actualizar() {
    const params = this.activatedRoute.snapshot.params;
    const codigo = params.id;
    this.admin.Contrasena = this.parametro.contra1;
    if (this.parametro.contra1 === this.parametro.contra2) {
      console.log(this.admin);
      this.adminService.updateAdmin(codigo, this.admin).subscribe(
        res => {
          this.admin1 = res;
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
  }
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.adminService.getAdmin(params.id).subscribe(
        res => {
          console.log(res);
          this.admin = res;
        },
        err => console.log(err)
      );
    }
  }

}
