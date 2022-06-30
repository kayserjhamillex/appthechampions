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
  selector: 'app-subproceso2',
  templateUrl: './subproceso2.component.html',
  styleUrls: ['./subproceso2.component.css']
})
export class Subproceso2Component implements OnInit {
  horario: any = [];
  horariofiltrado: any = [];
  reservas: any = [];
  reservasdia: any = [];
  filtrada: any = [];
  numerofecha = new Date().getTime();
  dia;
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
    const cliente = parseInt(this.activatedRoute.snapshot.paramMap.get('cliente'));
    // tslint:disable-next-line: radix
    const fechita = parseInt(this.activatedRoute.snapshot.paramMap.get('fecha'));
    this.numerocliente = cliente;
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
    this.itemService.getdisponibilidad(this.dia, this.codigofield).subscribe(
      res => {
        this.reservas = res;
        const arrayreservas = this.reservas;
        const reservasfecha = [];
        for (const obj1 of arrayreservas) {
          const numfecha = new Date(obj1.reserva.FechaReserva).getTime();
          if (numfecha === fecha) {
            reservasfecha.push(obj1);
            this.reservasdia = reservasfecha;
          }
        }
        // tslint:disable-next-line: deprecation
        this.horarioService.getHorarioFieldDia(this.dia, this.codigofield).subscribe(
          // tslint:disable-next-line: no-shadowed-variable
          res => {
            this.horario = res;
            if (Object.entries(this.reservasdia).length > 0) {
              const array1 = this.reservasdia;
              const array2 = this.horario;
              const filtrado: any = [];
              for (const filtro1 of array2) {
                const codigohorario = filtro1.id;
                for (const filtro2 of array1) {
                  const codigofiltrar = filtro2.HorarioId;
                  if (codigohorario === codigofiltrar) {
                    filtrado.push(filtro1);
                    this.filtrada = filtrado;
                  }
                }
              }
              const array3 = this.filtrada;
              const respuesta = array2.filter(alv => !array3.includes(alv));
              this.horariofiltrado = respuesta;
            } else if (Object.entries(this.reservasdia).length === 0) {
              this.horariofiltrado = this.horario;
            }
          },
          err => {
            console.log(err);
          }
        );
      }
    );
  }
  // tslint:disable-next-line: typedef
  seleccionar(codigo) {
    const parametro = +codigo;
    const array = this.horariofiltrado;
    const lista = this.seleccionados;
    for (const objeto of array) {
      const indice = array.indexOf(objeto);
      const turnito = objeto.hora.Turno;
      const precio1 = +objeto.field.Precio1;
      const precio2 = +objeto.field.Precio2;
      if (objeto.id === parametro) {
        if (turnito === 'dia') {
          this.pago = this.pago + precio2;
        } else if (turnito === 'noche') {
          this.pago = this.pago + precio1;
        }
        lista.push(objeto);
        this.indices.push(indice);
        this.seleccionados = lista;
        array.splice(indice, 1);
        this.horariofiltrado = array;
      }
    }
    if (Object.entries(this.seleccionados).length > 0) {
      this.check = true;
    } else if (Object.entries(this.seleccionados).length === 0) {
      this.check = false;
    }
  }
  // tslint:disable-next-line: typedef
  borrar(objeto) {
    const losindices = this.indices;
    const turnito = objeto.hora.Turno;
    const precio1 = +objeto.field.Precio1;
    const precio2 = +objeto.field.Precio2;
    if (turnito === 'dia') {
      this.pago = this.pago - precio2;
    } else if (turnito === 'noche') {
      this.pago = this.pago - precio1;
    }
    const array = this.seleccionados;
    const indice = array.indexOf(objeto);
    const elindice = losindices[indice];
    this.horariofiltrado.splice(elindice, 0, objeto);
    losindices.splice(indice, 1);
    this.indices = losindices;
    array.splice(indice, 1);
    this.seleccionados = array;
    if (Object.entries(this.seleccionados).length > 0) {
      this.check = true;
    } else if (Object.entries(this.seleccionados).length === 0) {
      this.check = false;
    }
  }
  // tslint:disable-next-line: typedef
  reservar() {
    const rangosdehora = this.seleccionados;
    delete this.reserva.id;
    this.reserva.Pago = this.pago.toString();
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
          for (const obj of rangosdehora) {
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
          this.finalizar();
          // poner de manera que espere el envio del correo a la creacion de los items
        } else {
          this.toastr.error('no se pudo crear la reserva');
        }
      }
    );
  }
  // tslint:disable-next-line: typedef
  finalizar() {
    const parametro = this.codigoreserva;
    // tslint:disable-next-line: deprecation
    this.reservaService.GetReservationSend(parametro).subscribe(
      res => {
        if (res) {
          this.toastr.info('correo enviado satisfactoriamente');
          this.router.navigate(
            [
              'admin',
              'procesos',
              'proceso1',
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
