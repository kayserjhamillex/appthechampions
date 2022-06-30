import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Reserva } from 'src/app/models/reserva';
import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-subproceso1de7',
  templateUrl: './subproceso1de7.component.html',
  styleUrls: ['./subproceso1de7.component.css']
})
export class Subproceso1de7Component implements OnInit {
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
  validado = false;
  fechasinreservas = true;
  reservas: any = [];
  dia;
  reservasdia: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private itemService: ItemService,
    private reservaService: ReservaService,
  ) { }
  // tslint:disable-next-line: typedef
  buscar(codigo) {
    const id = codigo.toString();
    // tslint:disable-next-line: deprecation
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
        // tslint:disable-next-line: deprecation
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
    if (this.validado === true && this.fechasinreservas === true) {
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
            'proceso7',
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
    } else {
      this.toastr.warning('Por favor validar la fecha a postergar');
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
  // tslint:disable-next-line: typedef
  validar(lafechasa) {
    const fecha = new Date(lafechasa);
    const d = fecha.getDate() + 1;
    const m = fecha.getMonth() + 1;
    const yyyy = fecha.getFullYear();
    let dd: any;
    let mm: any;
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
    // tslint:disable-next-line: deprecation
    this.reservaService.getReservaDia(cadena).subscribe(
      res => {
        this.reservas = res;
        console.log(this.reservas);
        if (this.reservas.length > 0) {
          this.toastr.warning('Fecha no Disponible, existen reservas');
          this.fechasinreservas = false;
          this.validado = true;
        } else if (this.reservas.length === 0) {
          this.validado = true;
          this.fechasinreservas = true;
          this.toastr.info('Fecha Disponible');
        }
      }
    );
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
