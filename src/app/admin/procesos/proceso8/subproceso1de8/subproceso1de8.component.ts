import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-subproceso1de8',
  templateUrl: './subproceso1de8.component.html',
  styleUrls: ['./subproceso1de8.component.css']
})
export class Subproceso1de8Component implements OnInit {
  dato;
  codigocliente;
  respuesta = false;
  clientbooking: any = [];
  cliente: Cliente = {
    id: 0,
    Fullname: '',
    Numerodocumento: '',
    Email: '',
    Password: '',
    ImagenCliente: '',
    Google: '0'
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private clienteService: ClienteService,
    private reservaService: ReservaService
  ) { }

  // tslint:disable-next-line: typedef
  searchEmailCliente() {
    // tslint:disable-next-line: deprecation
    this.clienteService.getClientecorreo(this.dato).subscribe(
      rescliente => {
        this.cliente = rescliente;
        this.codigocliente = this.cliente.id;
        this.toastr.success('Cliente encontrado');
        this.dato = '';
        const codigo = this.codigocliente;
        // tslint:disable-next-line: deprecation
        this.reservaService.getClientBooking(codigo).subscribe(
          // tslint:disable-next-line: no-shadowed-variable
          resreservas => {
            if (resreservas) {
              this.clientbooking = resreservas;
              this.toastr.success('sus reservas :)');
              this.respuesta = true;
              console.log(resreservas);
            } else {
              this.toastr.info('no tiene reservas');
            }
          }
        );
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
      rescliente => {
        this.cliente = rescliente;
        this.codigocliente = this.cliente.id;
        this.toastr.success('Cliente encontrado');
        this.dato = '';
        const codigo = this.codigocliente;
        // tslint:disable-next-line: deprecation
        this.reservaService.getClientBooking(codigo).subscribe(
          // tslint:disable-next-line: no-shadowed-variable
          resreservas => {
            if (resreservas) {
              this.clientbooking = resreservas;
              this.toastr.success('sus reservas :)');
              this.respuesta = true;
              console.log(resreservas);
            } else {
              this.toastr.info('no tiene reservas');
            }
          }
        );
      },
      err => {
        this.toastr.error('no se pudo encotrar cliente');
      }
    );
  }

  // tslint:disable-next-line: typedef
  detalles(codigo) {
    console.log(codigo);
    this.router.navigate(
      [
        'admin',
        'procesos',
        'proceso8',
        'subproceso2',
        codigo,
      ]
    );
  }

  ngOnInit(): void {
  }

}
