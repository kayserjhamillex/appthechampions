import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Field } from 'src/app/models/field';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FieldService } from 'src/app/services/field.service';
import { IconoUploadService } from 'src/app/services/icono.service';
import { ImageUploadService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-create-field',
  templateUrl: './create-field.component.html',
  styleUrls: ['./create-field.component.css']
})
export class CreateFieldComponent implements OnInit {
  @ViewChild('file1', {static: true}) fileicono;
  datosicono: any = [];
  laurlicono;
  @ViewChild('file2', {static: true}) fileimagen;
  datosimagen: any = [];
  laurlimagen;
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
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private servicioService: FieldService,
    private iconoService: IconoUploadService,
    private imagenService: ImageUploadService,
  ) { }
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
  savefield() {
    delete this.field.id;
    console.log(this.field);
    this.servicioService.saveField(this.field).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'field',
            'list'
          ]
        );
        this.toastr.success('Nuevo servicio creado');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo servicio');
      }
    );
  }
  ngOnInit(): void {
  }

}
