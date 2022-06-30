import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/models/reserva';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-subproceso4de2',
  templateUrl: './subproceso4de2.component.html',
  styleUrls: ['./subproceso4de2.component.css']
})
export class Subproceso4de2Component implements OnInit {
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
      this.reservaService.getReserva(params.id).subscribe(
        res => {
          this.ticket = res;
          const codigo = this.ticket.id;
          this.itemService.getHome(codigo.toString()).subscribe(
            // tslint:disable-next-line: no-shadowed-variable
            res => {
              if (res) {
                this.lositems = res;
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
