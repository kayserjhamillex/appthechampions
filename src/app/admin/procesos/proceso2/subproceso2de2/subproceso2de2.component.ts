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
  selector: 'app-subproceso2de2',
  templateUrl: './subproceso2de2.component.html',
  styleUrls: ['./subproceso2de2.component.css']
})
export class Subproceso2de2Component implements OnInit {
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
          rest => {
            this.horario = rest;
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
  igual() {
    this.lomismo = true;
    this.botones = false;
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
                          'proceso2',
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
        } else if (numero1 > numero2) {
          this.toastr.info('hay un conflicto, en el cual no ya esta tomado una de las horas');
          this.conflicto = true;
        } else if (numero1 < numero2) {
          this.toastr.error('error garrafal en el filtro');
        }
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
          this.sepago = this.sepago - precio2;
        } else if (turnito === 'noche') {
          this.sepago = this.sepago - precio1;
        }
        if (this.sepago >= 0) {
          lista.push(objeto);
          this.indices.push(indice);
          this.seleccionados = lista;
          array.splice(indice, 1);
          this.horariofiltrado = array;
        } else if (this.sepago < 0) {
          if (turnito === 'dia') {
            this.sepago = this.sepago + precio2;
          } else if (turnito === 'noche') {
            this.sepago = this.sepago + precio1;
          }
          this.toastr.info('no se puede elegir esto');
        }
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
      this.sepago = this.sepago + precio2;
    } else if (turnito === 'noche') {
      this.sepago = this.sepago + precio1;
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
  postergar() {
    const rangosdehora = this.seleccionados;
    delete this.reserva.id;
    this.reserva.Pago = this.pago.toString();
    this.reserva.Estado = 'postergado';
    // tslint:disable-next-line: radix
    const fechita = parseInt(this.activatedRoute.snapshot.paramMap.get('fecha'));
    this.reserva.FechaReserva = new Date(fechita);
    // tslint:disable-next-line: deprecation
    // tslint:disable-next-line: deprecation
    this.itemService.getHome(this.codigoreserva).subscribe(
      res => {
        const lalista: any = res;
        for (const par1 of rangosdehora) {
          for (const par2 of lalista) {
            this.item.id = par2.id;
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
      }
    );
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
            if (res) {
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
                      'proceso2',
                      'subproceso3',
                      parametro
                    ]
                  );
                }
              );
            } else {
              this.toastr.error('no se pudo crear la reserva');
            }
          }
        );
      }
    );
  }
}
