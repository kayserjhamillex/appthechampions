import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Reserva } from 'src/app/models/reserva';
import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-subproceso1de2',
  templateUrl: './subproceso1de2.component.html',
  styleUrls: ['./subproceso1de2.component.css']
})
export class Subproceso1de2Component implements OnInit {
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
  dato: '';
  boleta = false;
  datito = new Date();
  codigoreserva;
  numerofecha;
  fechaActual: any;
  items: any = [];
  codigocancha;
  elcodigo;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private itemService: ItemService,
    private reservaService: ReservaService,
  ) { }
  // tslint:disable-next-line: typedef
  buscar(codigo) {
    const id = codigo.toString();
    this.reservaService.getReserva(id).subscribe(
      res => {
        this.ticket = res;
        this.boleta = true;
        this.codigoreserva = this.ticket.id;
        this.toastr.success('Reserva Encontrada');
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
        this.itemService.getHome(this.codigoreserva).subscribe(
          // tslint:disable-next-line: no-shadowed-variable
          res => {
            this.items = res;
            this.codigocancha = this.items[0].horario.FieldId;
          }
        );
      },
      err => {
        this.toastr.error('Reserva no Encontrada');
      }
    );
  }
  // tslint:disable-next-line: typedef
  postergar(fecha) {
    const estado = this.ticket.Estado;
    if (estado === 'reservado' || estado === 'no vino') {
      this.numerofecha = new Date(fecha).getTime();
      const parametro0 = this.codigocancha;
      const parametro1 = this.codigoreserva;
      const parametro2 = this.numerofecha;
      // this.toastr.info('Proseguir con la postergacion');
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
  }

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
