import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ReportesService } from 'src/app/services/reportes.service';

@Component({
  selector: 'app-reporte1',
  templateUrl: './reporte1.component.html',
  styleUrls: ['./reporte1.component.css']
})
export class Reporte1Component implements OnInit {
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
  ) {}

  // tslint:disable-next-line: typedef
  Vizualizar() {
    this.data.fecha1 = this.parametros.Fechastart.toString();
    this.data.fecha2 = this.parametros.Fechaend.toString();
    const filtro = new Date().toString();
    const date1 = this.data.fecha1;
    const date2 = this.data.fecha2;
    this.reportetablas = true;
    this.reportegrafico = true;
    console.log(date1, date2, filtro);
    if (date1 === filtro || date2 === filtro) {
      this.toastr.error('por favor escoja fechas');
    } else {
      // aca va todo lo de abajo
    }
    // tslint:disable-next-line: deprecation
    this.reporteService.getcliente(date1, date2).subscribe(
      res => {
        if (res) {
          console.log(res);
          this.reporte = res;
          this.toastr.success('Apreciar el Reporte en tablas y en grafico');
          const cliente = this.reporte.map( (ele) => ele.cliente);
          const ingresos = this.reporte.map( (ele) => +ele.ingresos);
          this.datarepo = {
            labels: cliente,
            datasets: [
              {
                label: 'atenciones',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                data: ingresos
              }
            ]
          };
          console.log(this.datarepo);
          this.sinfechas = false;
          this.reportetablas = true;
          this.reportegrafico = true;
        } else {
          this.toastr.error('No se pudo hacer la consulta');
        }
      }
    );
  }
  ngOnInit(): void {
  }
  // printer() {
  //   const printContent = document.getElementById("pinshipdf");
  //   const WindowPrt = window.open('', '', 'left=0,top=50,width=900,height=900,toolbar=0,scrollbars=0,status=0');
  //   WindowPrt.document.write(printContent.innerHTML);
  //   WindowPrt.document.close();
  //   WindowPrt.focus();
  //   WindowPrt.print();
  //   WindowPrt.close();
  // }
  onPrint() {
    const printContents = document.getElementById('repo1').innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
    // this.router.navigate(
    //   [
    //     'admin',
    //     'reportes',
    //     'reporte1'
    //   ]
    // );
  }
// <script>
// 		function printDiv(divName){
// 			var printContents = document.getElementById(divName).innerHTML;
// 			var originalContents = document.body.innerHTML;
// 			document.body.innerHTML = printContents;
// 			window.print();
// 			document.body.innerHTML = originalContents;
// 		}
// 	</script>
// <div id='printMe'>
//   Print this only
// </div>
// <button onclick="printDiv('printMe')">Print only the above div</button>
  // tslint:disable-next-line: typedef
  descargar() {
    // const alv = document.getElementById('pinshipdf');
    // const documentDefinition = { content: alv };
    // const documentDefinition = document.getElementById('pinshipdf');
    // pdfMake.createPdf(alv).download();
    const data = document.getElementById('pinshipdf');  // Id of the table
    html2canvas(data).then(
      canvas => {
        // Few necessary setting options
        const imgWidth = 208;
        // const pageHeight = 295;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        const heightLeft = imgHeight;
        const contentDataURL = canvas.toDataURL('image/png');
        const pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
        const position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, heightLeft);
        pdf.save('MYPdf.pdf'); // Generated PDF
      }
    );
  }

}
