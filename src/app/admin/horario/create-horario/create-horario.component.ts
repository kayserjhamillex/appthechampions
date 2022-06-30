import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { HorarioTable } from 'src/app/models/horariotable';
import { HoraService } from 'src/app/services/hora.service';
import { FieldService } from 'src/app/services/field.service';
import { HorarioService } from 'src/app/services/horario.service';

@Component({
  selector: 'app-create-horario',
  templateUrl: './create-horario.component.html',
  styleUrls: ['./create-horario.component.css']
})
export class CreateHorarioComponent implements OnInit {
  dia: '';
  data = {
    inicio: 1,
    fin: 15,
    dia: '',
    field: 0
  };
  horario: HorarioTable = {
    id: 0,
    Dia: '',
    FieldId: 0,
    HoraId: 0,
  };
  horario1: HorarioTable = {
    id: 0,
    Dia: '',
    FieldId: 0,
    HoraId: 0,
  };
  horas: any = [];
  fields: any = [];
  previo: any = [];
  codigoinicio;
  codigofin;
  numeros: any = [];
  dias = [
    { id: 1, name: 'lunes'},
    { id: 2, name: 'martes'},
    { id: 3, name: 'miercoles'},
    { id: 4, name: 'jueves'},
    { id: 5, name: 'viernes'},
    { id: 6, name: 'sabado'},
    { id: 7, name: 'domingo'},
  ];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private horaService: HoraService,
    private fieldService: FieldService,
    private horarioService: HorarioService,
  ) { }

  getHoras() {
    this.horaService.getHoras().subscribe(
      res => {
        this.horas = res;
      },
      err => console.error(err)
    );
  }
  getFields() {
    this.fieldService.getFields().subscribe(
      res => {
        this.fields = res;
      },
      err => console.error(err)
    );
  }
  rango() {
    const inicio = this.data.inicio;
    const fin = this.data.fin + 1;
    const alv: any = [];
    for (let counter = inicio; counter < fin; counter++){
      alv.push(counter);
      this.numeros = alv;
    }
    console.log(this.numeros);
  }

  elejir(codigo3) {
    const codigo = codigo3;
    this.data.field = codigo;
    this.horario.FieldId = codigo;
  }
  diaelegido(name) {
    const wasa = {
      Dia: '',
      FieldId: 0,
      HoraId: 0,
    };
    this.data.dia = name;
    const diaelegido = name;
    this.horario.Dia = diaelegido;
    wasa.Dia = this.data.dia;
    wasa.FieldId = this.data.field;
    console.log(this.numeros);
    const array = this.numeros;
    const vista: any = [];
    for (const obj of array) {
      // console.log(obj);
      wasa.HoraId = obj;
      console.log(wasa);
      this.horarioService.saveHorario(wasa).subscribe(
        res => {
          console.log(res);
          vista.push(res);
          this.previo = vista;
        },
        err => {
          console.log(err);
        }
      );
    }
    console.log(this.previo);
  }
  limpiar() {
    this.previo = [];
  }
  finalizar() {
    this.router.navigate(
      [
        'admin',
        'horario',
        'list'
      ]
    );
  }
  ngOnInit(): void {
    this.getHoras();
    this.getFields();
    this.rango();
  }

}
