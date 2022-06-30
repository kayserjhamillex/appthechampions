import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Field } from 'src/app/models/field';
import { Component, OnInit } from '@angular/core';
import { FieldService } from 'src/app/services/field.service';
import { HorarioService } from 'src/app/services/horario.service';

@Component({
  selector: 'app-list-horario',
  templateUrl: './list-horario.component.html',
  styleUrls: ['./list-horario.component.css']
})
export class ListHorarioComponent implements OnInit {
  fields: any = [];
  horarios: any = [];
  dias = [
    { id: 1, name: 'lunes'},
    { id: 2, name: 'martes'},
    { id: 3, name: 'miercoles'},
    { id: 4, name: 'jueves'},
    { id: 5, name: 'viernes'},
    { id: 6, name: 'sabado'},
    { id: 7, name: 'domingo'},
  ];
  data = {
    dia: '',
    codigo: 0
  };
  field: Field = {
    id: 0,
    Name: '',
    Resumen: '',
    Descripcion: '',
    IconoField: '',
    ImagenField: '',
    Precio1: '',
    Precio2: ''
  };
  datos = {
    nombre: '',
    dia: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private fieldService: FieldService,
    private horarioService: HorarioService,
  ) { }

  getFields() {
    this.fieldService.getFields().subscribe(
      res => {
        this.fields = res;
      },
      err => console.error(err)
    );
  }
  elejir(codigo) {
    this.data.codigo = codigo;
    this.fieldService.getField(codigo).subscribe(
      res => {
        this.field = res;
        this.datos.nombre = this.field.Name;
      },
      err => {
        console.log(err);
      }
    );
  }
  diaelegido(name) {
    this.data.dia = name;
  }
  viewhorario() {
    console.log(this.data);
    const dia = this.data.dia.toString();
    const codigo = this.data.codigo.toString();
    this.horarioService.getHorarioFieldDia(dia, codigo).subscribe(
      res => {
        this.horarios = res;
      }
    );
  }
  // editar(wasa) {
  //   console.log(wasa);
  //   this.toastr.warning('la edicion esta disponible en la version platinum');
  //   this.router.navigate(
  //     [
  //       'admin',
  //       'horario',
  //       'update',
  //       wasa
  //     ]
  //   );
  // }
  ngOnInit(): void {
    this.getFields();
  }

}
