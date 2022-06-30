import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Admin } from 'src/app/models/admin';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {
  // declarando los datos del admin
  admin: Admin = {
    id: 0,
    Fullname: '',
    Correo: '',
    Contrasena: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private adminService: AdminService,
  ) { }
  // creando metodo para crear un nuevo admin
  // tslint:disable-next-line: typedef
  saveAdmin() {
    delete this.admin.id;
    console.log(this.admin);
    // llamando a servicio de creacion que esta enlazada con el api
    this.adminService.saveAdmin(this.admin).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'admin',
            'list'
          ]
        );
        this.toastr.success('Nuevo admin creado');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo admin');
      }
    );
  }
  ngOnInit(): void {
  }

}
