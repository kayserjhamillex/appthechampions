import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FieldService } from 'src/app/services/field.service';

@Component({
  selector: 'app-list-field',
  templateUrl: './list-field.component.html',
  styleUrls: ['./list-field.component.css']
})
export class ListFieldComponent implements OnInit {
  fields: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private servicioService: FieldService
  ) { }

  // tslint:disable-next-line: typedef
  getFields() {
    this.servicioService.getFields().subscribe(
      res => {
        this.fields = res;
      },
      err => console.error(err)
    );
  }
  // tslint:disable-next-line: typedef
  crear() {
    this.router.navigate(
      [
        'admin',
        'field',
        'create'
      ]
    );
  }
  // tslint:disable-next-line: typedef
  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar Servicio');
    this.router.navigate(
      [
        'admin',
        'field',
        'update',
        codigoaeditar
      ]
    );
  }
  ngOnInit(): void {
    this.getFields();
  }

}
