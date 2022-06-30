import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { ToastrService } from 'ngx-toastr';
import { Reserva } from 'src/app/models/reserva';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-subproceso3de6',
  templateUrl: './subproceso3de6.component.html',
  styleUrls: ['./subproceso3de6.component.css']
})
export class Subproceso3de6Component implements OnInit {
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
  elcodigo;
  reservainstitucional = false;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private itemService: ItemService,
    private activatedRoute: ActivatedRoute,
    private reservaService: ReservaService,
  ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      // tslint:disable-next-line: deprecation
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
          // tslint:disable-next-line: deprecation
          this.itemService.getHome(codigo.toString()).subscribe(
            // tslint:disable-next-line: no-shadowed-variable
            res => {
              if (res) {
                this.lositems = res;
                console.log(this.lositems);
                this.toastr.success('su boleta');
                // if (this.lositems.length === 48) {
                //   this.reservainstitucional = true;
                // } else {
                //   this.reservainstitucional = false;
                // }
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
