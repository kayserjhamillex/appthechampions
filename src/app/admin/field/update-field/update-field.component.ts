import { ToastrService } from 'ngx-toastr';
import { Field } from 'src/app/models/field';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FieldService } from 'src/app/services/field.service';
import { IconoUploadService } from 'src/app/services/icono.service';
import { ImageUploadService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-update-field',
  templateUrl: './update-field.component.html',
  styleUrls: ['./update-field.component.css']
})
export class UpdateFieldComponent implements OnInit {
  field: Field = {
    id: 0,
    Name: '',
    Resumen: '',
    Descripcion: '',
    IconoField: '',
    ImagenField: '',
    Precio1: '',
    Precio2: ''
  };
  @ViewChild('file1', {static: true}) fileicono;
  datosicono: any = [];
  laurlicono;
  @ViewChild('file2', {static: true}) fileimagen;
  datosimagen: any = [];
  laurlimagen;
  cambio1 = true;
  igual1 = true;
  cambio2 = true;
  igual2 = true;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private servicioService: FieldService,
    private activatedRoute: ActivatedRoute,
    private iconoService: IconoUploadService,
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
  changeIco() {
    this.fileicono.nativeElement.click();
  }
  // tslint:disable-next-line: typedef
  changeImg() {
    this.fileimagen.nativeElement.click();
  }
  // tslint:disable-next-line: typedef
  changeIcono() {
    // this.showAvatarUpload = true;
    const files: { [key: string]: File } = this.fileicono.nativeElement.files;
    // let progress = this.uploadService.upload(images);
    this.iconoService.uploadicono(files[0], 'icono').subscribe(
      (resico) => {
        console.log(resico);
        this.datosicono = resico;
        this.laurlicono = this.datosicono.data.url;
        console.log(this.laurlicono);
        this.field.IconoField = this.laurlicono;
      },
      console.error,
    );
  }
  // tslint:disable-next-line: typedef
  changeImagen() {
    // this.showAvatarUpload = true;
    const files: { [key: string]: File } = this.fileimagen.nativeElement.files;
    // let progress = this.uploadService.upload(images);
    this.imagenService.uploadimage(files[0], 'image').subscribe(
      (resimage) => {
        console.log(resimage);
        this.datosimagen = resimage;
        this.laurlimagen = this.datosimagen.data.url;
        console.log(this.laurlimagen);
        this.field.ImagenField = this.laurlimagen;
      },
      console.error,
    );
  }
  // tslint:disable-next-line: typedef
  updateField() {
    // tslint:disable-next-line: one-variable-per-declaration
    const params = this.activatedRoute.snapshot.params;
    this.servicioService.updateField(params.id, this.field).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'field',
            'list'
          ]
        );
        this.toastr.success('actualizando los datos del servicio');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo actualizar');
      }
    );
  }
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.servicioService.getField(params.id).subscribe(
        res => {
          console.log(res);
          this.field = res;
        },
        err => console.log(err)
      );
    }
  }

}
