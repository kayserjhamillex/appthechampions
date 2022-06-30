import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ReservaLocal } from 'src/app/models/reservalocal';
import { ReservaLocalito } from 'src/app/models/reservalocalito';
import { ReservaLocalService } from 'src/app/services/reservalocal.service';

@Component({
  selector: 'app-postergacion',
  templateUrl: './postergacion.component.html',
  styleUrls: ['./postergacion.component.css']
})
export class PostergacionComponent implements OnInit {
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
  lareserva = false;
  codigoreserva;
  mensaje;
  reservas: any = [];
  fechaActual: any;
  novalido = false;
  validado = false;
  fecha: Date = new Date();
  mesaje;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private reservaService: ReservaLocalService
  ) { }
  // tslint:disable-next-line: typedef
  getreservas() {
    this.reservaService.getLocals().subscribe(
      res => {
        if (res) {
          this.reservas = res;
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
  // tslint:disable-next-line: typedef
  validar(wasa) {
    const array = this.reservas;
    const parametro =  new Date(wasa);
    const parametrito = parametro.getTime();
    this.validado = true;
    for (const obj of array) {
      const avalidar = obj.FechaReservaLocal;
      if (avalidar === parametrito) {
        this.novalido = true;
      }
    }
  }
  ngOnInit(): void {
    this.fechaActual = this.getNowDate();
    this.reservas();
  }
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
  // tslint:disable-next-line: typedef
  actualizar(parametro) {
    this.reserva.Estado = 'postergado';
    this.reserva.FechaReservaLocal = new Date(parametro);
    this.reservaService.updateLocal(this.codigoreserva, this.reserva).subscribe(
      res => {
        if (res) {
          this.mensaje = res;
          this.toastr.info('reserva postergada');
          this.reservaService.GetPostponementSend(this.codigoreserva).subscribe(
            res => {
              if (res) {
                this.mensaje = res;
                this.toastr.info('envio de correo exitoso');
              } else {
                this.toastr.error('error al enviar el correo');
              }
            }
          )
        } else {
          this.toastr.error('error al postergar la reserva');
        }
      }
    );
  }
}
