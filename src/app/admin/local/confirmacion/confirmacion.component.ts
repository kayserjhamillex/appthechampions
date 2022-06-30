import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ReservaLocal } from 'src/app/models/reservalocal';
import { ReservaLocalito } from 'src/app/models/reservalocalito';
import { ReservaLocalService } from 'src/app/services/reservalocal.service';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent implements OnInit {
  dato = '';
  parametrito = '';
  money;
  reserva: ReservaLocalito = {
    id: 0,
    FechaReservaLocal: new Date(),
    Estado: '',
    Pago: '',
    Total: '',
    AdminId: 0,
    ClienteId: 0
  };
  reserva1: ReservaLocalito = {
    id: 0,
    FechaReservaLocal: new Date(),
    Estado: '',
    Pago: '',
    Total: '',
    AdminId: 0,
    ClienteId: 0
  };
  reservita: ReservaLocal = {
    id: 0,
    FechaReservaLocal: new Date(),
    Estado: '',
    Pago: '',
    Total: '',
    AdminId: 0,
    ClienteId: 0,
    admin: {
      id: 0,
      Fullname: '',
      Correo: '',
    },
    cliente: {
      id: 0,
      Fullname: '',
      Numerodocumento: '',
      Email: ''
    }
  };
  ticket: any = this.reservita;
  codigoreserva;
  lareserva = false;
  laboleta = false;
  mensaje;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private reservaService: ReservaLocalService
  ) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  buscar(elcodigo) {
    console.log(elcodigo);
    this.reservaService.getLocal(elcodigo).subscribe(
      res => {
        if (res) {
          this.reserva = res;
          this.codigoreserva = this.reserva.id;
          const dato1 = +this.reserva.Total;
          const dato2 = +this.reserva.Pago;
          const dato3 = dato1 - dato2;
          this.money = dato3.toString();
          this.lareserva = true;
          this.toastr.info('reserva encotrada');
        } else {
          this.toastr.error('no se pudo encotrar');
        }
      }
    );
  }
  // tslint:disable-next-line: typedef
  confirm(parametro) {
    const total = this.reserva.Total;
    const adelanto = this.reserva.Pago;
    const pago = adelanto + parametro;
    this.reserva.Pago = pago.toString();
    if (pago === total) {
      this.reserva.Estado = 'reservado';
      this.reservaService.updateLocal(this.codigoreserva, this.reserva).subscribe(
        res => {
          if (res) {
            this.reserva1 = res;
            this.ticket = res;
            this.toastr.info('reserva confirmada');
            this.laboleta = true;
            const codigo = this.reserva1.id.toString();
            this.reservaService.GetReservationSend(codigo).subscribe(
              res => {
                if (res) {
                  this.mensaje = res;
                  this.toastr.info('correo enviado');
                } else {
                  this.toastr.error('no se pudo enviar el correo');
                }
              }
            )
          } else {
            this.toastr.error('error al actualizar la reserva');
          }
        }
      );
    } else if (pago < total) {
      this.reserva.Estado = 'por confirmar';
      this.reservaService.updateLocal(this.codigoreserva, this.reserva).subscribe(
        res => {
          if (res) {
            this.reserva1 = res;
            this.ticket = res;
            this.toastr.info('reserva confirmada');
            this.laboleta = true;
          } else {
            this.toastr.error('error al actualizar la reserva');
          }
        }
      );
    }
  }
}
