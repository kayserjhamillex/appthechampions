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
  selector: 'app-subproceso2de7',
  templateUrl: './subproceso2de7.component.html',
  styleUrls: ['./subproceso2de7.component.css']
})
export class Subproceso2de7Component implements OnInit {
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
  botones = true;
  lomismo = false;
  cambiar = false;
  conflicto = false;
  itemsigualito: any = [];
  larespuesta: any;
  larespuestaitem: any;
  elmensaje: any;
  sepago;
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

  // tslint:disable-next-line: typedef
  locambio() {
    this.cambiar = true;
    this.botones = false;
  }

  // tslint:disable-next-line: typedef
  hayconflicto() {
    this.cambiar = true;
    this.lomismo = false;
  }

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
    const codigo = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.codigofield = codigo.toString();
    // tslint:disable-next-line: radix
    const codiguillo = parseInt(this.activatedRoute.snapshot.paramMap.get('reserva'));
    this.codigoreserva = codiguillo.toString();
    console.log(`codigo de la reserva: ${this.codigoreserva}`);

    // tslint:disable-next-line: radix
    const fechita = parseInt(this.activatedRoute.snapshot.paramMap.get('fecha'));
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
    console.log(this.dia);
    console.log(this.codigofield);
    // tslint:disable-next-line: deprecation
    this.reservaService.getReserva(this.codigoreserva).subscribe(
      res => {
        this.reserva1 = res;
        this.sepago = +this.reserva1.Pago;
      }
    );
    // tslint:disable-next-line: deprecation
    this.horarioService.getHorarioFieldDia(this.dia, this.codigofield).subscribe(
      rest => {
        this.horariofiltrado = rest;
      }, err => {
        console.log(err);
      }
    );
  }

  // tslint:disable-next-line: typedef
  igual() {
    // tslint:disable-next-line: radix
    const fechita = parseInt(this.activatedRoute.snapshot.paramMap.get('fecha'));
    // tslint:disable-next-line: deprecation
    this.itemService.getHome(this.codigoreserva).subscribe(
      res => {
        const lalista: any = res;
        const numero1 = Object.entries(lalista).length;
        const array1 = this.horariofiltrado;
        console.log(lalista);
        console.log(array1);
        console.log(numero1);
        const nuevos: any = [];
        for (const elitem of array1) {
          for (const otroitem of lalista) {
            const parametro = elitem.hora.Horainicio;
            const parametro1 = otroitem.horario.hora.Horainicio;
            if (parametro === parametro1) {
              nuevos.push(elitem);
              this.itemsigualito = nuevos;
            }
          }
        }
        console.log(nuevos);
        const numero2 = Object.entries(this.itemsigualito).length;
        if (numero1 === numero2) {
          const array2: any = this.itemsigualito;
          for (const par1 of array2) {
            for (const iterator of lalista) {
              this.item.id = iterator.id;
              this.item.Estado = 'postergado';
              this.item.ReservaId = this.codigoreserva;
              this.item.HorarioId = par1.id;
              // tslint:disable-next-line: deprecation
              this.itemService.updateItem(this.item.id.toString(), this.item).subscribe(
                // tslint:disable-next-line: no-shadowed-variable
                res => {
                  console.log('se actualizo');
                  this.larespuestaitem = res;
                }
              );
            }
          }
          // tslint:disable-next-line: deprecation
          this.reservaService.getReserva(this.codigoreserva).subscribe(
            // tslint:disable-next-line: no-shadowed-variable
            res => {
              this.reserva = res;
              this.reserva.Estado = 'postergado';
              this.reserva.FechaReserva = new Date(fechita);
              // tslint:disable-next-line: deprecation
              this.reservaService.updateReserva(this.codigoreserva, this.reserva).subscribe(
                // tslint:disable-next-line: no-shadowed-variable
                res => {
                  this.larespuesta = res;
                  console.log('se actualizo la reserva');
                  // tslint:disable-next-line: deprecation
                  this.reservaService.GetPostponementSend(this.codigoreserva).subscribe(
                    // tslint:disable-next-line: no-shadowed-variable
                    res => {
                      this.elmensaje = res;
                      const parametro =  this.codigoreserva;
                      console.log('se envio el correo');
                      this.router.navigate(
                        [
                          'admin',
                          'procesos',
                          'proceso7',
                          'subproceso3',
                          parametro
                        ]
                      );
                    }
                  );
                }
              );
            }
          );
        } else if (numero1 !== numero2) {
          this.toastr.info('hay un conflicto, en el cual no ya esta tomado una de las horas');
        }
      }
    );
  }

}
