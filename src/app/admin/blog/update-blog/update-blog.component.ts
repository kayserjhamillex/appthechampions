import { ToastrService } from 'ngx-toastr';
import { Blog } from 'src/app/models/blog';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ParrafoService } from 'src/app/services/parrafo.service';
import { VideoUploadService } from 'src/app/services/video.service';
import { ImageUploadService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit {
  blog: Blog = {
    id: 0,
    Titulo: '',
    Subtitulo: '',
    Resumen: '',
    ImagendelBlog: '',
    VideodelBlog: ''
  };
  @ViewChild('file1') fileimagen;
  datosimagen: any = [];
  laurlimagen;
  @ViewChild('file2') filevideo;
  datosvideo: any = [];
  laurlvideo;
  cambio1 = true;
  igual1 = true;
  cambio2 = true;
  igual2 = true;
  parrafos: any = [];
  mensaje;
  mensaje1;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute,
    private parrafoService: ParrafoService,
    private videoService: VideoUploadService,
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
  changeImagen() {
    this.fileimagen.nativeElement.click();
  }
  // tslint:disable-next-line: typedef
  changeMedia() {
    this.filevideo.nativeElement.click();
  }
  // tslint:disable-next-line: typedef
  changeImage() {
    // this.showAvatarUpload = true;
    const files: { [key: string]: File } = this.fileimagen.nativeElement.files;
    // let progress = this.uploadService.upload(images);
    this.imagenService.uploadimage(files[0], 'image').subscribe(
      (resimage) => {
        console.log(resimage);
        this.datosimagen = resimage;
        this.laurlimagen = this.datosimagen.data.url;
        console.log(this.laurlimagen);
        this.blog.ImagendelBlog = this.laurlimagen;
      },
      console.error,
    );
  }
  // tslint:disable-next-line: typedef
  changeVideo() {
    // this.showAvatarUpload = true;
    const files: { [key: string]: File } = this.filevideo.nativeElement.files;
    // let progress = this.uploadService.upload(images);
    this.videoService.uploadvideo(files[0], 'video').subscribe(
      (resvideo) => {
        console.log(resvideo);
        this.datosvideo = resvideo;
        this.laurlvideo = this.datosvideo.data.url;
        console.log(this.laurlvideo);
        this.blog.VideodelBlog = this.laurlvideo;
      },
      console.error,
    );
  }
  // tslint:disable-next-line: typedef
  updateBlog() {
    // tslint:disable-next-line: one-variable-per-declaration
    const params = this.activatedRoute.snapshot.params;
    this.blogService.updateBlog(params.id, this.blog).subscribe(
        res => {
          console.log(res);
          this.mensaje1 = res;
          this.toastr.success('actualizando los datos del blog');
        },
        err => {
          console.error(err);
          this.toastr.error('no se pudo actualizar');
        }
      );
  }
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    const codigo = params.id;
    if (params.id) {
      this.blogService.getBlog(codigo).subscribe(
        res => {
          this.blog = res;
          this.toastr.info('datos del blog');
        },
        err => {
          this.toastr.error('no se pudo sacar los datos del blog');
        }
      );
      this.parrafoService.getBlog(codigo).subscribe(
        res => {
          if (res) {
            this.parrafos = res;
            console.log(res);
            this.toastr.info('los parrafos del blog');
          } else {
            this.toastr.error('no se pudo traer los parrafos del blog');
          }
        }
      );
    }
  }

  updateparrafo(codigazo: number, elparrafo: string) {
    const params = this.activatedRoute.snapshot.params;
    const elcodigo = params.id;
    const parrafin = {
      id: codigazo,
      Parrafo: elparrafo,
      BlogId: elcodigo
    }
    this.parrafoService.updateParrafo(codigazo, parrafin).subscribe(
      res => {
        if (res) {
          this.mensaje = res;
          this.router.navigate(
            [
              'admin',
              'blog',
              'update',
              elcodigo
            ]
          );
          this.toastr.info('se actualizo correctamente');
        } else {
          this.toastr.error('no se pudo actualizar');
        }
      }
    );
  }

  delete(dato) {
    const params = this.activatedRoute.snapshot.params;
    const elcodigo = params.id;
    const parametro = dato.id;
    const indice = this.parrafos.indexOf(dato);
    this.parrafoService.deleteParrafo(parametro).subscribe(
      res => {
        if (res) {
          this.mensaje = res;
          console.log(this.mensaje);
          this.parrafos.splice(indice, 1);
          this.toastr.info('parrafo eliminado correctamente');
          this.router.navigate(
            [
              'admin',
              'blog',
              'update',
              elcodigo
            ]
          );
        } else {
          this.toastr.error('no se pudo eliminar');
        }
      }
    )
  }

  terminar() {
    this.router.navigate(
      [
        'admin',
        'blog',
        'list'
      ]
    );
  }
}
