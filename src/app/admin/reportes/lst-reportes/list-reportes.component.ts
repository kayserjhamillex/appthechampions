import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reportes',
  templateUrl: './list-reportes.component.html',
  styleUrls: ['./list-reportes.component.css']
})
export class ListReportesComponent implements OnInit {

  constructor(
    private router: Router,
    private toastr: ToastrService,
  ) { }
  // tslint:disable-next-line: typedef
  reporte1() {
    this.toastr.info('ver el reporte 1');
    this.router.navigate(
      [
        'admin',
        'reportes',
        'reporte1'
      ]
    );
  }
  // tslint:disable-next-line: typedef
  reporte2() {
    this.toastr.info('ver el reporte 2');
    this.router.navigate(
      [
        'admin',
        'reportes',
        'reporte2'
      ]
    );
  }
  // tslint:disable-next-line: typedef
  reporte3() {
    this.toastr.info('ver el reporte 3');
    this.router.navigate(
      [
        'admin',
        'reportes',
        'reporte3'
      ]
    );
  }
  // tslint:disable-next-line: typedef
  reporte4() {
    this.toastr.info('ver el reporte 4');
    this.router.navigate(
      [
        'admin',
        'reportes',
        'reporte4'
      ]
    );
  }
  // tslint:disable-next-line: typedef
  reporte5() {
    this.toastr.info('ver el reporte 5');
    this.router.navigate(
      [
        'admin',
        'reportes',
        'reporte5'
      ]
    );
  }
  // tslint:disable-next-line: typedef
  reporte6() {
    this.toastr.info('ver el reporte 6');
    this.router.navigate(
      [
        'admin',
        'reportes',
        'reporte6'
      ]
    );
  }
  ngOnInit(): void {
  }


}
