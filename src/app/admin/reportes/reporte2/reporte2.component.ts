import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ReportesService } from 'src/app/services/reportes.service';

@Component({
  selector: 'app-reporte2',
  templateUrl: './reporte2.component.html',
  styleUrls: ['./reporte2.component.css']
})
export class Reporte2Component implements OnInit {
  parametros = {
    Fechastart: new Date(),
    Fechaend: new Date(),
  };
  data = {
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
    this.datarepo = {
      labels: [
        'A',
        'B',
        'C'
      ],
      datasets: [
        {
          data: [
            300,
            50,
            100
          ],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#EC407A',
            '#AB47BC'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#EC407A',
            '#AB47BC'
          ]
        }
      ]
    };
   }

   // tslint:disable-next-line: typedef
   Vizualizartablas() {
    console.log(this.parametros);
    this.data.fecha1 = this.parametros.Fechastart.toString();
    this.data.fecha2 = this.parametros.Fechaend.toString();
    console.log(this.data);
    const date1 = this.data.fecha1;
    const date2 = this.data.fecha2;
    this.reporteService.getadmin(date1, date2).subscribe(
      res => {
        if (res) {
          this.reporte = res;
          console.log(res);
          this.toastr.success('Apreciar el Reporte en tablas');
          this.sinfechas = false;
          this.reportetablas = true;
          this.reportegrafico = false;
        } else {
          this.toastr.error('No se pudo hacer la consulta');
        }
      }
    );
  }
  // tslint:disable-next-line: typedef
  Vizualizargrafico() {
    console.log(this.parametros);
    this.data.fecha1 = this.parametros.Fechastart.toString();
    this.data.fecha2 = this.parametros.Fechaend.toString();
    console.log(this.data);
    const date1 = this.data.fecha1;
    const date2 = this.data.fecha2;
    this.reportegrafico = true;
    this.reporteService.getadmin(date1, date2).subscribe(
      res => {
        if (res) {
          console.log(res);
          this.toastr.success('Apreciar el Reporte en grafico');
          const trabajador = res.map( (ele) => ele.administrador);
          const atenciones = res.map( (ele) => +ele.cantidad);
          this.datarepo.labels = trabajador;
          this.datarepo.datasets[0].data = atenciones;
          console.log(this.datarepo);
          this.sinfechas = false;
          this.reportegrafico = true;
          this.reportetablas = false;
        } else {
          this.toastr.error('No se pudo hacer la consulta');
        }
      },
    );
  }

  onPrint() {
    const printContents = document.getElementById('repo2').innerHTML;
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
    const printContents = document.getElementById('repo2part2').innerHTML;
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
