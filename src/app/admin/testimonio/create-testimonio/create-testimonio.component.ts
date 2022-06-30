import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListTestimonio } from 'src/app/models/listtest';
import { ClienteService } from 'src/app/services/cliente.service';
import { TestimonioService } from 'src/app/services/testimonio.service';

@Component({
  selector: 'app-create-testimonio',
  templateUrl: './create-testimonio.component.html',
  styleUrls: ['./create-testimonio.component.css']
})
export class CreateTestimonioComponent implements OnInit {
  testimonio: ListTestimonio = {
    id: 0,
    Testimonio: '',
    ClienteId: 0
  };
  dato: '';
  cliente: Cliente = {
    id: 0,
    Fullname: '',
    Numerodocumento: '',
    Email: '',
    Password: '',
    ImagenCliente: 'https://fieldsports.herokuapp.com/stylesheets/usuarios/man.png',
    Google: '0'
  };
  cliente1: Cliente = {
    id: 0,
    Fullname: '',
    Numerodocumento: '',
    Email: '',
    Password: '',
    ImagenCliente: 'https://fieldsports.herokuapp.com/stylesheets/usuarios/man.png',
    Google: '0'
  };
  botones = true;
  buscar = false;
  crear = false;
  datoscliente = false;
  codigocliente;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService,
    private testimonioService: TestimonioService,
  ) { }

  // tslint:disable-next-line: typedef
  buscarcliente() {
    this.buscar = true;
    // console.log(this.buscar);
    this.botones = false;
    // console.log(this.botones);
  }
  // tslint:disable-next-line: typedef
  crearcliente() {
    this.crear = true;
    // console.log(this.crear);
    this.botones = false;
    // console.log(this.botones);
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
        // console.error(err);
        this.toastr.error('no se pudo crear un nuevo cliente');
      }
    );
  }
  // tslint:disable-next-line: typedef
  searchEmailCliente() {
    // console.log(this.dato);
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
        // console.error(err);
        this.toastr.error('no se pudo encotrar cliente');
      }
    );
  }
  // tslint:disable-next-line: typedef
  searchDocCliente() {
    // console.log(this.dato);
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
        // console.error(err);
        this.toastr.error('no se pudo encotrar cliente');
      }
    );
  }
  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  createtestimonian() {
    this.testimonio.ClienteId = this.codigocliente;
    delete this.testimonio.id;
    console.log(this.testimonio);
    this.testimonioService.saveTestimonio(this.testimonio).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'testimonio',
            'list'
          ]
        );
        this.toastr.success('Nuevo testimonio creado');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo testimonio');
      }
    );
  }

}
