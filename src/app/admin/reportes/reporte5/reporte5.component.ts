import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ReportesService } from 'src/app/services/reportes.service';

@Component({
  selector: 'app-reporte5',
  templateUrl: './reporte5.component.html',
  styleUrls: ['./reporte5.component.css']
})
export class Reporte5Component implements OnInit {
  parametros = {
    Fechastart: new Date(),
    Fechaend: new Date(),
  };
  datos = {
    fecha1: '',
    fecha2: ''
  };
  reporte: any = [];
  ingresos: any = [];
  egresos: any = [];
  datarepo: any;
  elingreso;
  elegreso;
  sinfechas = false;
  losingresos = false;
  bandera = false;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private reporteService: ReportesService,
  ) { }

  // tslint:disable-next-line: typedef
  Vizualizar() {
    this.datos.fecha1 = this.parametros.Fechastart.toString();
    this.datos.fecha2 = this.parametros.Fechaend.toString();

    const inicio =  new Date(this.parametros.Fechastart).getTime();
    const fin = new Date(this.parametros.Fechaend).getTime();
    const laresta = (fin - inicio) / (1000*60*60*24); //¿se puede algo así?
    console.log(laresta);
    console.log(this.datos.fecha1);
    console.log(this.datos);
    if (this.datos.fecha1 !== '' && this.datos.fecha2 !== '') {
      const date1 = this.datos.fecha1;
      const date2 = this.datos.fecha2;
      // tslint:disable-next-line: deprecation
      this.reporteService.getflujocaja(date1, date2).subscribe(
        res => {
          if (res) {
            this.toastr.success('Apreciar el Reporte en grafico');
            console.log(res[0]);
            this.reporte = res;
            this.ingresos = res[0];
            let monto1 = 0;
            const meses = Math.floor(laresta / 30);
            for (const obj1 of this.ingresos) {
              const parametro1 = +obj1.ingresos;
              monto1 = monto1 + parametro1;
              this.elingreso = monto1;
            }
            console.log(meses);
            if (meses < 1) {
              this.elegreso = 0;
              this.bandera = true;
            } else {
              if (this.elingreso <= 6000) {
                this.elegreso = 20 * meses;
              } else if (6000 < this.elingreso && this.elingreso <= 8000) {
                this.elegreso = 50 * meses;
              }
            }
            console.log(this.elegreso);
            this.losingresos = true;
          } else {
            this.toastr.error('No se pudo hacer la consulta');
          }
        }
      );
    } else if (this.datos.fecha1 === '' && this.datos.fecha2 === '') {
      this.toastr.warning('Por favor ponga las fechas de rango');
      this.sinfechas = true;
    }
  }

  onPrint() {
    const printContents = document.getElementById('repo5').innerHTML;
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
