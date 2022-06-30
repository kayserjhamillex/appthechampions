import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';
import { Genero } from 'src/app/models/genero.model';
import { FieldService } from 'src/app/services/field.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-subproceso1de3',
  templateUrl: './subproceso1de3.component.html',
  styleUrls: ['./subproceso1de3.component.css']
})
export class Subproceso1de3Component implements OnInit {
  fields: any = [];
  cliente: Cliente = {
    id: 0,
    Fullname: '',
    Numerodocumento: '',
    Email: '',
    Password: '',
    ImagenCliente: '',
    Google: '0',
  };
  dato: '';
  cliente1: Cliente = {
    id: 0,
    Fullname: '',
    Numerodocumento: '',
    Email: '',
    Password: '',
    ImagenCliente: '',
    Google: '0',
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
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private fieldService: FieldService,
    private clienteService: ClienteService,
  ) { }

  // tslint:disable-next-line: typedef
  getFields() {
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
  ngOnInit(): void {
    this.getFields();
  }
  // tslint:disable-next-line: typedef
  atencion(wasa) {
    const codigo = wasa;
    const parametro = this.codigocliente;
    // console.log(numerofecha);
    this.router.navigate(
      [
        'admin',
        'procesos',
        'proceso3',
        'subproceso2',
        codigo,
        parametro
      ]
    );
  }

}
