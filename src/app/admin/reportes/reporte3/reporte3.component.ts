import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ReportesService } from 'src/app/services/reportes.service';

@Component({
  selector: 'app-reporte3',
  templateUrl: './reporte3.component.html',
  styleUrls: ['./reporte3.component.css']
})
export class Reporte3Component implements OnInit {
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
            '#FFCE56'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
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
    // tslint:disable-next-line: deprecation
    this.reporteService.getestado(date1, date2).subscribe(
      res => {
        if (res) {
          console.log(res);
          this.reporte = res;
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
    // tslint:disable-next-line: deprecation
    this.reporteService.getestado(date1, date2).subscribe(
      res => {
        if (res) {
          console.log(res);
          this.toastr.success('Apreciar el Reporte en grafico');
          const estados = res.map( (ele) => ele.estados);
          const cantidad = res.map( (ele) => +ele.cantidad);
          this.datarepo.labels = estados;
          this.datarepo.datasets[0].data = cantidad;
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
    const printContents = document.getElementById('repo3').innerHTML;
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
    const printContents = document.getElementById('repo3part2').innerHTML;
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
