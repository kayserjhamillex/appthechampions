import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { ToastrService } from 'ngx-toastr';
import { Reserva } from 'src/app/models/reserva';
import { Component, OnInit } from '@angular/core';
import { Itemcito } from 'src/app/models/itemcito';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-subproceso2de5',
  templateUrl: './subproceso2de5.component.html',
  styleUrls: ['./subproceso2de5.component.css']
})
export class Subproceso2de5Component implements OnInit {
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
  item: Itemcito = {
    id: 0,
    Estado: 'reservado',
    HorarioId: 0,
    ReservaId: 0
  };
  fechaActual: any;
  mensaje;
  mensaje1;
  ticket: any = this.reserva;
  lositems: any = [];
  atencion = false;
  postergacion = false;
  codigoreserva;
  numerofecha;
  codigocancha;
  datito = new Date();
  elcodigo;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private itemService: ItemService,
    private activatedRoute: ActivatedRoute,
    private reservaService: ReservaService,
  ) { }

  // tslint:disable-next-line: typedef
  enableatender() {
    this.atencion = true;
  }
  // tslint:disable-next-line: typedef
  enablepostergar() {
    this.postergacion = true;
  }

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

  ngOnInit(): void {
    this.fechaActual = this.getNowDate();
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.reservaService.getReserva(params.id).subscribe(
        res => {
          this.ticket = res;
          const codigo = this.ticket.id;
          if (codigo < 10) {
            this.elcodigo = '00000' + codigo.toString();
          } else if (codigo < 100) {
            this.elcodigo = '0000' + codigo.toString();
          } else if (codigo < 1000) {
            this.elcodigo = '000' + codigo.toString();
          } else if (codigo < 10000) {
            this.elcodigo = '00' + codigo.toString();
          } else if (codigo < 100000) {
            this.elcodigo = '0' + codigo.toString();
          } else {
            this.elcodigo = codigo.toString();
          }
          this.codigoreserva = codigo;
          this.itemService.getHome(codigo.toString()).subscribe(
            // tslint:disable-next-line: no-shadowed-variable
            res => {
              if (res) {
                this.lositems = res;
                this.codigocancha = this.lositems[0].horario.FieldId;
                this.toastr.success('su boleta');
              } else {
                this.toastr.error('no se logra acceder a los items de la reserva');
              }
            }
          );
        },
        err => console.log(err)
      );
    }
  }

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

  seguirpostergando(fecha) {
    const estado = this.ticket.Estado;
    if (estado === 'reservado' || estado === 'no vino') {
      this.numerofecha = new Date(fecha).getTime();
      const parametro0 = this.codigocancha;
      const parametro1 = this.codigoreserva;
      const parametro2 = this.numerofecha;
      this.toastr.info('Proseguir con la postergacion');
      this.router.navigate(
        [
          'admin',
          'procesos',
          'proceso2',
          'subproceso2',
          parametro0,
          parametro1,
          parametro2
        ]
      );
    } else {
      this.toastr.warning('el cliente no puede realizar postergacion');
      this.toastr.info(`el estado es: ${estado}`);
    }
  }

  // tslint:disable-next-line: typedef
  descargar() {
    const element = document.getElementById('parapdf');
    html2canvas(element).then(
      (canvas) => {
        const imgWidth = 208;
        // const pageheight = 295;
        const imgheight = canvas.height * imgWidth / canvas.width;
        const heightleft = imgheight;
        console.log(canvas);
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jspdf('p', 'mm', 'a4');
        const position = 0;
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, heightleft);
        pdf.save('boleta.pdf');
      }
    );
  }

}
