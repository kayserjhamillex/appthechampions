import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ReportesService } from 'src/app/services/reportes.service';

@Component({
  selector: 'app-reporte4',
  templateUrl: './reporte4.component.html',
  styleUrls: ['./reporte4.component.css']
})
export class Reporte4Component implements OnInit {
  parametros = {
    Fechastart: new Date(),
    Fechaend: new Date(),
  };
  datos = {
    fecha1: '',
    fecha2: ''
  };
  sinfechas = true;
  reportegrafico = false;
  reportetablas = false;
  reporte: any = [];
  datarepo: any;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private reporteService: ReportesService,
  ) {
  }
  // tslint:disable-next-line: typedef
  Vizualizartablas() {
    this.datos.fecha1 = this.parametros.Fechastart.toString();
    this.datos.fecha2 = this.parametros.Fechaend.toString();
    console.log(this.datos);
    const date1 = this.datos.fecha1;
    const date2 = this.datos.fecha2;
    // tslint:disable-next-line: deprecation
    this.reporteService.getdetalleestado(date1, date2).subscribe(
      res => {
        if (res) {
          this.reporte = res;
          this.toastr.success('Apreciar el Reporte en tablas');
          console.log(res);
          this.sinfechas = false;
          this.reportegrafico = false;
          this.reportetablas = true;
        } else {
          this.toastr.error('No se pudo hacer la consulta');
        }
      }
    );
  }

  onPrint() {
    const printContents = document.getElementById('repo4').innerHTML;
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
    const printContents = document.getElementById('repo4part2').innerHTML;
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

  ngOnInit(): void {
  }

}
