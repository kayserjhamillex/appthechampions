import { ToastrService } from 'ngx-toastr';
import { Reserva } from 'src/app/models/reserva';
import { Component, OnInit } from '@angular/core';
import { Itemcito } from 'src/app/models/itemcito';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-subproceso1de4',
  templateUrl: './subproceso1de4.component.html',
  styleUrls: ['./subproceso1de4.component.css']
})
export class Subproceso1de4Component implements OnInit {
  reserva: Reserva = {
    id: 0,
    FechaReserva: new Date(),
    Estado: 'reservado',
    Pago: '',
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
  ticket: any = this.reserva;
  lositems: any = [];
  item: Itemcito = {
    id: 0,
    Estado: 'reservado',
    HorarioId: 0,
    ReservaId: 0
  };
  mensaje;
  mensaje1;
  sebusco = false;
  dato = '';
  codigoreserva;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private itemService: ItemService,
    private activatedRoute: ActivatedRoute,
    private reservaService: ReservaService,
  ) { }
  // tslint:disable-next-line: typedef
  buscar(codigito) {
    this.reservaService.getReserva(codigito).subscribe(
      res => {
        this.ticket = res;
        const codigo = this.ticket.id;
        this.codigoreserva = codigo;
        this.itemService.getHome(codigo.toString()).subscribe(
          // tslint:disable-next-line: no-shadowed-variable
          res => {
            if (res) {
              this.lositems = res;
              this.toastr.success('su boleta');
              this.sebusco = true;
            } else {
              this.toastr.error('no se logra acceder a los items de la reserva');
            }
          }
        );
      },
      err => console.log(err)
    );
  }
  // tslint:disable-next-line: typedef
  atender(codigo) {
    const array: any = this.lositems;
    const numero = array.length;
    const elcodigo = this.codigoreserva;
    this.itemService.getItem(codigo).subscribe(
      res => {
        if (res) {
          this.item = res;
          this.item.Estado = 'atendido';
          console.log(this.item);
          this.itemService.updateItem(codigo.toString(), this.item).subscribe(
            // tslint:disable-next-line: no-shadowed-variable
            res => {
              if (res) {
                this.mensaje = res;
                this.toastr.success('tiempo atendido');
                let i = 0;
                for (const obj of array) {
                  const parametro = obj.Estado;
                  if (parametro === 'atendido') {
                    i++;
                  }
                }
                if (i === numero) {
                  this.reserva.Estado = 'atendido';
                  this.reservaService.updateReserva(elcodigo, this.reserva).subscribe(
                    resupdatereserva => {
                      if (resupdatereserva !== []) {
                        this.mensaje1 = resupdatereserva;
                      }
                    },
                    err => {
                      console.log('error al actualizar');

                    }
                  )
                }
              } else {
                this.toastr.error('no se pudo atender');
              }
            }
          );
        } else {
          this.toastr.error('no se pudo atender');
        }
      }
    );
  }
  ngOnInit(): void {
  }

}
