import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ReservaLocal } from 'src/app/models/reservalocal';
import { ReservaLocalito } from 'src/app/models/reservalocalito';
import { ReservaLocalService } from 'src/app/services/reservalocal.service';

@Component({
  selector: 'app-cancelacion',
  templateUrl: './cancelacion.component.html',
  styleUrls: ['./cancelacion.component.css']
})
export class CancelacionComponent implements OnInit {
  dato = '';
  reserva: ReservaLocalito = {
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
  lareserva = false;
  codigoreserva;
  mensaje;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private reservaService: ReservaLocalService
  ) { }
  // tslint:disable-next-line: typedef
  buscar(elcodigo) {
    console.log(elcodigo);
    this.reservaService.getLocal(elcodigo).subscribe(
      res => {
        if (res) {
          this.reserva = res;
          this.ticket = res;
          this.codigoreserva = this.reserva.id;
          this.lareserva = true;
          this.toastr.info('reserva encotrada');
        } else {
          this.toastr.error('no se pudo encotrar');
        }
      }
    );
  }
  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  cancelar() {
    this.reservaService.deleteLocal(this.codigoreserva).subscribe(
      res => {
        if (res) {
          this.mensaje = res;
          this.toastr.info('se cancelo la reserva');
        } else {
          this.toastr.error('no se pudo cancelar');
        }
      }
    );
  }
}
