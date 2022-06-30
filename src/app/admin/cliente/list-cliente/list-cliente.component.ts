import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css']
})
export class ListClienteComponent implements OnInit {
  clientes: any = [];
  lista = true;
  busqueda = false;
  resultado = false;
  cliente: Cliente = {
    id: 0,
    Fullname: '',
    Numerodocumento: '',
    Email: '',
    Password: '',
    ImagenCliente: '',
    Google: '0'
  };
  dato;
  codigocliente;
  porimprimir = false;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.getClientes();
  }
  // tslint:disable-next-line: typedef
  ver() {
    this.lista = true;
    this.busqueda = false;
  }
  // tslint:disable-next-line: typedef
  buscar() {
    this.lista = false;
    this.busqueda = true;
  }
  // tslint:disable-next-line: typedef
  searchEmailCliente() {
    this.clienteService.getClientecorreo(this.dato).subscribe(
      res => {
        this.cliente = res;
        this.codigocliente = this.cliente.id;
        this.toastr.success('Cliente encontrado');
        this.dato = '';
        this.resultado = true;
        this.busqueda = false;
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
        this.cliente = res;
        this.codigocliente = this.cliente.id;
        this.toastr.success('Cliente encontrado');
        this.dato = '';
        this.resultado = true;
        this.busqueda = false;
      },
      err => {
        this.toastr.error('no se pudo encotrar cliente');
      }
    );
  }
  // para listar a los clientes
  // tslint:disable-next-line: typedef
  getClientes() {
    this.clienteService.getClientes().subscribe(
      res => {
        this.clientes = res;
      },
      err => console.error(err)
    );
  }
  // tslint:disable-next-line: typedef
  crear() {
    this.router.navigate(
      [
        'admin',
        'cliente',
        'create'
      ]
    );
  }
  // tslint:disable-next-line: typedef
  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar Cliente');
    this.router.navigate(
      [
        'admin',
        'cliente',
        'update',
        codigoaeditar
      ]
    );
  }
  // tslint:disable-next-line: typedef
  editarsearch() {
    const parametro = this.codigocliente;
    this.toastr.info('Editar Cliente');
    this.router.navigate(
      [
        'admin',
        'cliente',
        'update',
        parametro
      ]
    );
  }
  pre() {
    this.porimprimir = true;
    this.lista = false;
  }
  onPrint() {
    const printContents = document.getElementById('clientlist').innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
    // this.router.navigate(
    //   [
    //     'admin',
    //     'reportes',
    //     'reporte1'
    //   ]
    // );
  }
  terminar() {
    this.porimprimir = false;
    this.lista = true;
  }
}
