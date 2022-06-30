import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Empresa } from 'src/app/models/empresa';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EmpresaService } from 'src/app/services/empresa.service';
import { IconoUploadService } from 'src/app/services/icono.service';
import { ImageUploadService } from 'src/app/services/imagen.service';
import { ProfileUploadService } from 'src/app/services/imagepriv.service';

@Component({
  selector: 'app-update-empresa',
  templateUrl: './update-empresa.component.html',
  styleUrls: ['./update-empresa.component.css']
})
export class UpdateEmpresaComponent implements OnInit {
  empresa: Empresa = {
    id: 0,
    Name: '',
    RazonSocial: '',
    Direccion: '',
    Correo: '',
    Celular: '',
    Celular2: '',
    Logo: '',
    Banner1: '',
    Banner2: '',
    Banner3: '',
    Historia: '',
    Mision: '',
    Vision: ''
  };
  @ViewChild('file1', {static: true}) filelogo;
  datoslogo: any = [];
  laurllogo;
  @ViewChild('file2', {static: true}) filebanner1;
  datosbanner1: any = [];
  laurlvbanner1;
  @ViewChild('file3', {static: true}) filebanner2;
  datosbanner2: any = [];
  laurlvbanner2;
  @ViewChild('file4', {static: true}) filebanner3;
  datosbanner3: any = [];
  laurlvbanner3;
  cambio1 = true;
  igual1 = true;
  cambio2 = true;
  igual2 = true;
  cambio3 = true;
  igual3 = true;
  cambio4 = true;
  igual4 = true;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private empresaService: EmpresaService,
    private iconoService: IconoUploadService,
    private imagenpriv: ProfileUploadService,
    private imagenService: ImageUploadService,
  ) { }

  // tslint:disable-next-line: typedef
  cambiaso1() {
    this.cambio1 = false;
  }
  // tslint:disable-next-line: typedef
  cambiaso2() {
    this.cambio2 = false;
  }
  // tslint:disable-next-line: typedef
  cambiaso3() {
    this.cambio3 = false;
  }
  // tslint:disable-next-line: typedef
  cambiaso4() {
    this.cambio4 = false;
  }
  // tslint:disable-next-line: typedef
  changeLogo() {
    this.filelogo.nativeElement.click();
  }
  // tslint:disable-next-line: typedef
  changeBann1() {
    this.filebanner1.nativeElement.click();
  }
  // tslint:disable-next-line: typedef
  changeBann2() {
    this.filebanner2.nativeElement.click();
  }
  // tslint:disable-next-line: typedef
  changeBann3() {
    this.filebanner3.nativeElement.click();
  }
  // tslint:disable-next-line: typedef
  changeLogito() {
    // this.showAvatarUpload = true;
    const files: { [key: string]: File } = this.filelogo.nativeElement.files;
    // let progress = this.uploadService.upload(images);
    this.imagenpriv.uploadlogosmall(files[0], 'logosmall').subscribe(
      (reslogo) => {
        console.log(reslogo);
        this.datoslogo = reslogo;
        this.laurllogo = this.datoslogo.data.url;
        console.log(this.laurllogo);
        this.empresa.Logo = this.laurllogo;
      },
      console.error,
    );
  }
  // tslint:disable-next-line: typedef
  changeBannercito1() {
    // this.showAvatarUpload = true;
    const files: { [key: string]: File } = this.filebanner1.nativeElement.files;
    // let progress = this.uploadService.upload(images);
    this.imagenpriv.uploadbanner(files[0], 'banner').subscribe(
      (resbanner1) => {
        console.log(resbanner1);
        this.datosbanner1 = resbanner1;
        this.laurlvbanner1 = this.datosbanner1.data.url;
        console.log(this.laurlvbanner1);
        this.empresa.Banner1 = this.laurlvbanner1;
      },
      console.error,
    );
  }
  // tslint:disable-next-line: typedef
  changeBannercito2() {
    // this.showAvatarUpload = true;
    const files: { [key: string]: File } = this.filebanner2.nativeElement.files;
    // let progress = this.uploadService.upload(images);
    this.imagenpriv.uploadbanner(files[0], 'banner').subscribe(
      (resbanner2) => {
        console.log(resbanner2);
        this.datosbanner2 = resbanner2;
        this.laurlvbanner2 = this.datosbanner2.data.url;
        console.log(this.laurlvbanner2);
        this.empresa.Banner2 = this.laurlvbanner2;
      },
      console.error,
    );
  }
  // tslint:disable-next-line: typedef
  changeBannercito3() {
    // this.showAvatarUpload = true;
    const files: { [key: string]: File } = this.filebanner3.nativeElement.files;
    // let progress = this.uploadService.upload(images);
    this.imagenpriv.uploadbanner(files[0], 'banner').subscribe(
      (resbanner3) => {
        console.log(resbanner3);
        this.datosbanner3 = resbanner3;
        this.laurlvbanner3 = this.datosbanner3.data.url;
        console.log(this.laurlvbanner3);
        this.empresa.Banner3 = this.laurlvbanner3;
      },
      console.error,
    );
  }

  ngOnInit(): void {
    const codigo = '1';
    if (codigo) {
      this.empresaService.getEmpresa(codigo).subscribe(
        res => {
          console.log(res);
          this.empresa = res;
        },
        err => console.log(err)
      );
    }
  }
  // tslint:disable-next-line: typedef
  updateEmpresa() {
    const codigo = '1';
    this.empresaService.updateEmpresa(codigo, this.empresa).subscribe(
        res => {
          console.log(res);
          this.router.navigate(
            [
              'admin',
              'empresa',
              'view'
            ]
          );
          this.toastr.success('actualizando los datos de la empresa');
        },
        err => {
          console.error(err);
          this.toastr.error('no se pudo actualizar');
        }
      );
  }

}
