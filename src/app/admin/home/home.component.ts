import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Itemcito } from 'src/app/models/itemcito';
import { Reservita } from 'src/app/models/reservita';
import { ItemService } from 'src/app/services/item.service';
import { FieldService } from 'src/app/services/field.service';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hoy = new Date();
  numerodia;
  fields: any = [];
  reservas: any = [];
  reservasfiltradas: any = [];
  detalles: any = [];
  atendido: any = [];
  controlador: any = [];
  bandera = false;
  seleccionado;
  item: Itemcito = {
    id: 0,
    Estado: '',
    HorarioId: 0,
    ReservaId: 0
  };
  reserva: Reservita = {
    id: 0,
    FechaReserva: new Date(),
    Estado: '',
    Pago: '',
    AdminId: 0,
    ClienteId: 0,
  };
  mensaje1;
  mensaje2;
  constructor(
    private router: Router,
    private toast: ToastrService,
    private itemService: ItemService,
    private fieldService: FieldService,
    private reservaService: ReservaService,
  ) { }
  // tslint:disable-next-line: typedef
  getfield() {
    // tslint:disable-next-line: deprecation
    this.fieldService.getFields().subscribe(
      res => {
        this.fields = res;
        console.log(this.fields);
      },
      err => {
        console.log(err);
      }
    );
  }
  // tslint:disable-next-line: typedef
  fechadeldia() {
    const d = this.hoy.getDate();
    const m = this.hoy.getMonth() + 1;
    const yyyy = this.hoy.getFullYear();
    let dd: any;
    let mm: any;
    let pinshifecha: string;
    if (d < 10) {
      dd = '0' + d;
    } else {
      dd = d;
    }
    if (m < 10) {
      mm = '0' + m;
    } else {
      mm = m;
    }
    const cadena = yyyy + '-' + mm + '-' + dd;
    console.log(cadena);
    // pinshifecha = '2021-04-09';
    // pinshifecha = cadena.toString();
    console.log(cadena);
    const a2 = new Date(cadena).getTime();
    console.log(a2);
    this.numerodia = a2;
  }
  ngOnInit(): void {
    this.fechadeldia();
    this.getfield();
  }
  // tslint:disable-next-line: typedef
  fieldsselected(wasa) {
    console.log(wasa);
    // tslint:disable-next-line: deprecation
    this.reservaService.getHome(wasa).subscribe(
      res => {
        this.reservas = res;
        const array = this.reservas;
        const parametro = this.numerodia;
        const filtro: any = [];
        console.log(parametro);
        console.log(array);
        for (const obj of array) {
          const fecha = obj.FechaReserva;
          const numerofecha = new Date(fecha).getTime();
          console.log(numerofecha);
          if (numerofecha === parametro) {
            console.log('se encontro igualdad');
            filtro.push(obj);
            this.reservasfiltradas = filtro;
          }
        }
        console.log(this.reservasfiltradas);
      },
      err => {
        console.log(err);
      }
    );
  }

  // tslint:disable-next-line: typedef
  details(code) {
    this.seleccionado = code;
    console.log(code);
    // tslint:disable-next-line: deprecation
    this.itemService.getHome(code).subscribe(
      res => {
        if (res) {
          console.log(res);
          this.detalles = res;
          this.toast.info('horario de la reserva elegida');
        } else {
          this.toast.error('no se encontro nada');
        }
      }
    );
  }

  // tslint:disable-next-line: typedef
  atender(codigo) {
    const dato1 = this.detalles.length;
    // tslint:disable-next-line: deprecation
    this.itemService.getItem(codigo).subscribe(
      res => {
        if (res) {
          this.item = res;
          this.controlador.push(res);
          this.item.Estado = 'atendido';
          // tslint:disable-next-line: deprecation
          this.itemService.updateItem(codigo, this.item).subscribe(
            // tslint:disable-next-line: no-shadowed-variable
            res => {
              if (res) {
                this.mensaje1 = res;
                if (this.controlador.length === dato1) {
                  // tslint:disable-next-line: deprecation
                  this.reservaService.getReserva(this.seleccionado).subscribe(
                    // tslint:disable-next-line: no-shadowed-variable
                    res => {
                      if (res) {
                        this.reserva = res;
                        this.reserva.Estado = 'atendido';
                        // tslint:disable-next-line: deprecation
                        this.reservaService.updateReserva(this.seleccionado, this.reserva).subscribe(
                          // tslint:disable-next-line: no-shadowed-variable
                          res => {
                            if (res) {
                              this.mensaje2 = res;
                              this.router.navigate(
                                [
                                  'admin',
                                  'home'
                                ]
                              );
                            } else {
                              this.toast.error('error al actualizar la reserva');
                            }
                          }
                        );
                      } else {
                        this.toast.error('datos no obtenidos de la reserva');
                      }
                    }
                  );
                } else {
                  this.toast.error('error de atencion');
                }
              } else {
                this.toast.error('error al actualizar item');
              }
            }
          );
        } else {
          this.toast.error('no se optiene el dato');
        }
      }
    );
  }
}
