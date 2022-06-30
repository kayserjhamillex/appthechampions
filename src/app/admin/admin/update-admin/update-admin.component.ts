import { ToastrService } from 'ngx-toastr';
import { Admin } from 'src/app/models/admin';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {
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
    private activatedRoute: ActivatedRoute,
  ) { }

  // tslint:disable-next-line: typedef
  updateAdmin() {
    const params = this.activatedRoute.snapshot.params;
    this.adminService.updateAdmin(params.id, this.admin).subscribe(
        res => {
          console.log(res);
          this.router.navigate(
            [
              'admin',
              'admin',
              'list'
            ]
          );
          this.toastr.success('actualizando los datos del admin');
        },
        err => {
          console.error(err);
          this.toastr.error('no se pudo actualizar');
        }
      );
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
