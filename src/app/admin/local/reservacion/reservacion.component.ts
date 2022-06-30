import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Admin } from 'src/app/models/admin';
import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';
import { Genero } from 'src/app/models/genero.model';
import { ReservaLocal } from 'src/app/models/reservalocal';
import { AdminService } from 'src/app/services/admin.service';
import { ReservaLocalito } from 'src/app/models/reservalocalito';
import { ClienteService } from 'src/app/services/cliente.service';
import { ReservaLocalService } from 'src/app/services/reservalocal.service';

@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent implements OnInit {
  admin: Admin = {
    id: 0,
    Fullname: '',
    Correo: ''
  };
  parametros = {
    pago1: '',
    pago2: ''
  };
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
  reserva1: ReservaLocalito = {
    id: 0,
    FechaReservaLocal: new Date(),
    Estado: '',
    Pago: '',
    Total: '',
    AdminId: 0,
    ClienteId: 0
  };
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
  fecha: Date = new Date();
  fechaActual: any;
  reservas: any = [];
  novalido = false;
  validado = false;
  verboleta = false;
  mensaje;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private adminService: AdminService,
    private clienteService: ClienteService,
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
        this.reserva.ClienteId = this.codigocliente;
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
        this.reserva.ClienteId = this.codigocliente;
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
        this.reserva.ClienteId = this.codigocliente;
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
    this.fechaActual = this.getNowDate();
    this.reservas();
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
  // tslint:disable-next-line: typedef
  reservar(fecha, adelanto, total) {
    this.adminService.client$.subscribe(
      res => {
        if (res) {
          this.admin = res;
          this.reserva.AdminId = this.admin.id;
          delete this.reserva.id;
          this.reserva.Pago = adelanto;
          this.reserva.Total = total;
          this.reserva.FechaReservaLocal = new Date(fecha);
          if (adelanto < total) {
            this.reserva.Estado = 'por confirmar';
            console.log(this.reserva);
            this.reservaService.saveLocal(this.reserva).subscribe(
            // tslint:disable-next-line: no-shadowed-variable
              res => {
                if (res) {
                  this.reserva1 = res;
                  this.ticket = res;
                  this.toastr.success('se creo la reserva del local');
                } else {
                  this.toastr.error('no se pudo crear');
                }
              }
            );
          } else if (adelanto === total) {
            this.reserva.Estado = 'reservado';
            console.log(this.reserva);
            this.reservaService.saveLocal(this.reserva).subscribe(
            // tslint:disable-next-line: no-shadowed-variable
              res => {
                if (res) {
                  this.reserva1 = res;
                  this.ticket = res;
                  const codigo = this.reserva1.id.toString();
                  this.toastr.success('se creo la reserva del local');
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
                  this.toastr.error('no se pudo crear');
                }
              }
            );
          }
        }
      }
    );
  }
  // tslint:disable-next-line: typedef
  boleta() {
    this.verboleta = true;
  }

}
