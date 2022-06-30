import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { ReportesService } from 'src/app/services/reportes.service';

@Component({
  selector: 'app-reporte6',
  templateUrl: './reporte6.component.html',
  styleUrls: ['./reporte6.component.css']
})
export class Reporte6Component implements OnInit {
  hoy = new Date();
  numerodia;
  lafecha = '';
  data: any = [];
  reservasdehoy: any = [];
  reservashechashoy: any = [];
  ingresodia = 0;
  constructor(
    private router: Router,
    private toast: ToastrService,
    private itemService: ItemService,
    private reporteService: ReportesService,
  ) { }
  // tslint:disable-next-line: typedef
  fechadeldia() {
    const d = this.hoy.getDate();
    const m = this.hoy.getMonth() + 1;
    const yyyy = this.hoy.getFullYear();
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
    // const pinshifecha = '2021-04-09';
    this.lafecha = cadena;
    console.log(this.lafecha);
  }
  ngOnInit(): void {
    this.fechadeldia();
    this.elrepo();
  }

  elrepo() {
    const parametro = this.lafecha;
    this.reporteService.getrepodia(parametro).subscribe(
      data => {
        this.toast.info('reporte del dia');
        console.log(data);
        this.reservasdehoy = data[0];
        this.reservashechashoy = data[1];
      },
      error => {
        this.toast.error(error.message);
        console.log(error);
      }
    )
  }

  onPrint() {
    const printContents = document.getElementById('repo6').innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
    // this.router.navigate(
    //   [
    //     'admin',
    //     'reportes',
    //     'reporte2'
    //   ]
    // );
  }

  onPrint2() {
    const printContents = document.getElementById('repo6part2').innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
    // this.router.navigate(
    //   [
    //     'admin',
    //     'reportes',
    //     'reporte2'
    //   ]
    // );
  }
  print1() {

  }
  print2() {

  }
}
