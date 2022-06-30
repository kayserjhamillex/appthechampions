import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';
import { Genero } from 'src/app/models/genero.model';
import { FieldService } from 'src/app/services/field.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-subproceso1de6',
  templateUrl: './subproceso1de6.component.html',
  styleUrls: ['./subproceso1de6.component.css']
})
export class Subproceso1de6Component implements OnInit {
  fields: any = [];
  cliente: Cliente = {
    id: 0,
    Fullname: '',
    Numerodocumento: '',
    Email: '',
    Password: '',
    ImagenCliente: '',
    Google: '0'
  };
  dato: '';
  cliente1: Cliente = {
    id: 0,
    Fullname: '',
    Numerodocumento: '',
    Email: '',
    Password: '',
    ImagenCliente: '',
    Google: '0'
  };
  botones = true;
  buscar = false;
  crear = false;
  datoscliente = false;
  codigocliente;
  genero: Genero [] = [
    {
      id: 1,
      name: 'Masculino'
    },
    {
      id: 2,
      name: 'Femenino'
    }
  ];
  hombre = 'https://fieldsports.herokuapp.com/stylesheets/usuarios/man.png';
  mujer = 'https://fieldsports.herokuapp.com/stylesheets/usuarios/women.png';
  fieldnormal: any = [];
  fielddescuento: any = [];
  normal = true;
  descuento = false;
  fecha: Date = new Date();
  fechaActual: any;
  validado = false;
  fechasinreservas = true;
  reservas: any = [];
  dia;
  reservasdia: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    // private itemService: ItemService,
    private fieldService: FieldService,
    private reservaService: ReservaService,
    private clienteService: ClienteService,
  ) { }

  // tslint:disable-next-line: typedef
  getFields() {
    // tslint:disable-next-line: deprecation
    this.fieldService.getFields().subscribe(
      res => {
        this.fields = res;
      },
      err => console.error(err)
    );
  }
  // tslint:disable-next-line: typedef
  buscarcliente() {
    this.buscar = true;
    this.botones = false;
  }
  // tslint:disable-next-line: typedef
  crearcliente() {
    this.crear = true;
    this.botones = false;
  }
  // tslint:disable-next-line: typedef
  cambiarimagen(valor) {
    if (valor === 'Masculino') {
    this.cliente.ImagenCliente = this.hombre;
    } else if (valor === 'Femenino') {
      this.cliente.ImagenCliente = this.mujer;
    }
  }
  // tslint:disable-next-line: typedef
  saveCliente() {
    delete this.cliente.id;
    this.cliente.Password = this.cliente.Numerodocumento;
    console.log(this.cliente);
    // tslint:disable-next-line: deprecation
    this.clienteService.saveCliente(this.cliente).subscribe(
      res => {
        this.cliente1 = res;
        this.codigocliente = this.cliente1.id;
        this.toastr.success('Nuevo cliente creado');
        this.datoscliente = true;
        this.crear = false;
      },
      err => {
        this.toastr.error('no se pudo crear un nuevo cliente');
      }
    );
  }
  // tslint:disable-next-line: typedef
  searchEmailCliente() {
    // tslint:disable-next-line: deprecation
    this.clienteService.getClientecorreo(this.dato).subscribe(
      res => {
        this.cliente1 = res;
        this.codigocliente = this.cliente1.id;
        this.toastr.success('Cliente encontrado');
        this.dato = '';
        this.datoscliente = true;
        this.buscar = false;
      },
      err => {
        this.toastr.error('no se pudo encotrar cliente');
      }
    );
  }
  // tslint:disable-next-line: typedef
  searchDocCliente() {
    // tslint:disable-next-line: deprecation
    this.clienteService.getClientedoc(this.dato).subscribe(
      res => {
        this.cliente1 = res;
        this.codigocliente = this.cliente1.id;
        this.toastr.success('Cliente encontrado');
        this.dato = '';
        this.datoscliente = true;
        this.buscar = false;
      },
      err => {
        this.toastr.error('no se pudo encotrar cliente');
      }
    );
  }
  // tslint:disable-next-line: typedef
  reservar(wasa, fecha) {
    if (this.validado === true && this.fechasinreservas === true && this.cliente1.id !== 0) {
      const codigo = wasa;
      const numerofecha = new Date(fecha).getTime();
      const parametro = this.codigocliente;
      this.router.navigate(
        [
          'admin',
          'procesos',
          'proceso6',
          'subproceso2',
          codigo,
          parametro,
          numerofecha
        ]
      );
    } else {
      this.toastr.warning('Por favor validar la fecha y el cliente');
    }
  }

  // tslint:disable-next-line: typedef
  validar(lafechasa) {
    const fecha = new Date(lafechasa);
    const d = fecha.getDate() + 1;
    const m = fecha.getMonth() + 1;
    const yyyy = fecha.getFullYear();
    let dd: any;
    let mm: any;
    if (d < 10) {
      dd = '0' + d;
    } else {
      dd = d;
    }
    if (m < 10) {
      mm = '0' + m;
    } else {
      mm = m;
    }
    const cadena = yyyy + '-' + mm + '-' + dd;
    console.log(cadena);
    // tslint:disable-next-line: deprecation
    this.reservaService.getReservaDia(cadena).subscribe(
      res => {
        this.reservas = res;
        console.log(this.reservas);
        if (this.reservas.length > 0) {
          this.toastr.warning('Fecha no Disponible, existen reservas');
          this.fechasinreservas = false;
          this.validado = true;
        } else if (this.reservas.length === 0) {
          this.validado = true;
          this.fechasinreservas = true;
          this.toastr.info('Fecha Disponible');
        }
      }
    );
  }

  // tslint:disable-next-line: typedef
  sumarDias(fecha, dia) {
    fecha.setDate(fecha.getDate() + dia);
    const dd = fecha.getDate();
    const mm = fecha.getMonth() + 1; // As January is 0.
    const yyyy = fecha.getFullYear();
    let returnDate = '';
    returnDate += yyyy;
    if (mm < 10) {
      returnDate += `-0${mm}`;
      } else {
      returnDate += `-${mm}`;
      }

    if (dd < 10) {
    returnDate += `-0${dd}`;
    } else {
    returnDate += `-${dd}`;
    }
    return returnDate;
  }
  // tslint:disable-next-line: typedef
  getNowDate() {
    const fecha = new Date();
    const today = new Date();
    // return returnDate;
    const d = new Date(today);
    // this.sumarDias(returnDate)
    return this.sumarDias(d, 1);
  }
  ngOnInit(): void {
    this.fechaActual = this.getNowDate();
    this.getFields();
  }

}
