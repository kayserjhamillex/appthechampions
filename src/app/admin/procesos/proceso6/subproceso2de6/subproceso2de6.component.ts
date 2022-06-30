import { ToastrService } from 'ngx-toastr';
import { Admin } from 'src/app/models/admin';
import { Component, OnInit } from '@angular/core';
import { Itemcito } from 'src/app/models/itemcito';
import { Reservita } from 'src/app/models/reservita';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { AdminService } from 'src/app/services/admin.service';
import { FieldService } from 'src/app/services/field.service';
import { HorarioService } from 'src/app/services/horario.service';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-subproceso2de6',
  templateUrl: './subproceso2de6.component.html',
  styleUrls: ['./subproceso2de6.component.css']
})
export class Subproceso2de6Component implements OnInit {
  horario: any = [];
  horariofiltrado: any = [];
  reservas: any = [];
  reservasdia: any = [];
  filtrada: any = [];
  numerofecha = new Date().getTime();
  dia;
  dato = '';
  reserva: Reservita = {
    id: 0,
    FechaReserva: new Date(),
    Estado: '',
    Pago: '',
    AdminId: 1,
    ClienteId: 0
  };
  reserva1: Reservita = {
    id: 0,
    FechaReserva: new Date(),
    Estado: '',
    Pago: '',
    AdminId: 1,
    ClienteId: 0
  };
  numerocliente;
  codigofield;
  codigoreserva;
  mensaje: any = [];
  mensajito;
  admin: Admin = {
    id: 0,
    Fullname: '',
    Correo: '',
    Contrasena: ''
  };
  codigoadmin;
  lasreservas: any = [];
  item: Itemcito = {
    id: 0,
    Estado: 'reservado',
    HorarioId: 0,
    ReservaId: 0
  };
  seleccionados: any = [];
  pago = 0;
  indices: any = [];
  check = false;
  lositems: any = [];
  reservado = false;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private itemService: ItemService,
    private fieldService: FieldService,
    private adminService: AdminService,
    private horarioService: HorarioService,
    private activatedRoute: ActivatedRoute,
    private reservaService: ReservaService,
  ) { }

  ngOnInit(): void {
    // para sacar el codigo del admin jejeje
    // tslint:disable-next-line: deprecation
    this.adminService.client$.subscribe(
      res => {
        if (res) {
          this.admin = res;
          this.codigoadmin = this.admin.id;
        }
      }
    );
    // tslint:disable-next-line: radix
    const codigofield = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.codigofield = codigofield.toString();
    // tslint:disable-next-line: radix
    // const cliente = parseInt(this.activatedRoute.snapshot.paramMap.get('cliente'));
    // tslint:disable-next-line: radix
    const fechita = parseInt(this.activatedRoute.snapshot.paramMap.get('fecha'));
    // this.numerocliente = cliente;
    this.reserva.ClienteId = this.numerocliente;
    this.reserva.AdminId = this.codigoadmin;
    const lafecha = new Date(fechita);
    const array =
          [
            'domingo',
            'lunes',
            'martes',
            'miercoles',
            'jueves',
            'viernes'
          ];
    const fechasa = lafecha.setDate(lafecha.getDate() + 1);
    const fechaselect = new Date(fechasa);
    const numerodia = fechaselect.getUTCDay() - 1;
    let nombredia = array[numerodia];
    if (numerodia === -1) {
      nombredia = 'sabado';
    }
    this.dia = nombredia;
    const fecha = fechita;
    // tslint:disable-next-line: deprecation
    this.horarioService.getHorarioFieldDia(this.dia, this.codigofield).subscribe(
      // tslint:disable-next-line: no-shadowed-variable
      res => {
        this.horariofiltrado = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  // tslint:disable-next-line: typedef
  reservar() {
    // tslint:disable-next-line: radix
    const cliente = parseInt(this.activatedRoute.snapshot.paramMap.get('cliente'));
    this.numerocliente = cliente;
    this.reserva.ClienteId = this.numerocliente;
    this.reserva.AdminId = this.codigoadmin;
    if (this.dato !== '') {
      const elpago = this.dato;
      console.log(elpago);
      const array1 = this.horariofiltrado;
      delete this.reserva.id;
      this.reserva.Pago = elpago;
      this.reserva.Estado = 'reservado';
      // tslint:disable-next-line: radix
      const fechita = parseInt(this.activatedRoute.snapshot.paramMap.get('fecha'));
      this.reserva.FechaReserva = new Date(fechita);
      // tslint:disable-next-line: deprecation
      this.reservaService.saveReserva(this.reserva).subscribe(
        res => {
          if (res) {
            this.reserva1 = res;
            this.codigoreserva = this.reserva1.id;
            const lista = {
              Estado: 'reservado',
              HorarioId: 0,
              ReservaId: 0
            };
            lista.ReservaId = this.reserva1.id;
            this.reservado = true;
            for (const obj of array1) {
              lista.HorarioId = obj.id;
              // tslint:disable-next-line: deprecation
              this.itemService.saveItem(lista).subscribe(
                // tslint:disable-next-line: no-shadowed-variable
                res => {
                  if (res) {
                    this.lositems.push(res);
                    this.toastr.info('se creo un item');
                  } else {
                    this.toastr.error('no se pudo crear los items');
                  }
                }
              );
            }
          } else {
            this.toastr.error('no se pudo crear la reserva');
          }
        }
      );
    } else {
      const elpago = '300';
      console.log(elpago);
      const array1 = this.horariofiltrado;
      delete this.reserva.id;
      this.reserva.Pago = elpago;
      this.reserva.Estado = 'reservado';
      // tslint:disable-next-line: radix
      const fechita = parseInt(this.activatedRoute.snapshot.paramMap.get('fecha'));
      this.reserva.FechaReserva = new Date(fechita);
      // tslint:disable-next-line: deprecation
      this.reservaService.saveReserva(this.reserva).subscribe(
        res => {
          if (res) {
            this.reserva1 = res;
            this.codigoreserva = this.reserva1.id;
            const lista = {
              Estado: 'reservado',
              HorarioId: 0,
              ReservaId: 0
            };
            lista.ReservaId = this.reserva1.id;
            this.reservado = true;
            for (const obj of array1) {
              lista.HorarioId = obj.id;
              // tslint:disable-next-line: deprecation
              this.itemService.saveItem(lista).subscribe(
                // tslint:disable-next-line: no-shadowed-variable
                res => {
                  if (res) {
                    this.lositems.push(res);
                    // this.toastr.info('se creo un item');
                  } else {
                    this.toastr.error('no se pudo crear los items');
                  }
                }
              );
            }
          } else {
            this.toastr.error('no se pudo crear la reserva');
          }
        }
      );
    }
  }
  // tslint:disable-next-line: typedef
  finalizar() {
    const parametro = this.codigoreserva.toString();
    console.log(parametro);
    // tslint:disable-next-line: deprecation
    this.reservaService.GetReservationSend(parametro).subscribe(
      res => {
        if (res) {
          console.log(res);
          this.toastr.info('correo enviado satisfactoriamente');
          this.router.navigate(
            [
              'admin',
              'procesos',
              'proceso6',
              'subproceso3',
              parametro
            ]
          );
        } else {
          this.toastr.error('no se pudo enviar el correo');
        }
      }
    );
  }

}
