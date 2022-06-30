import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.css']
})
export class ListBlogComponent implements OnInit {
  blog: any = [] ;
  resultado;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private blogService: BlogService
  ) { }

  // tslint:disable-next-line: typedef
  getBlogs() {
    this.blogService.getBlogs().subscribe(
      res => {
        this.blog = res;
      },
      err => console.error(err)
    );
  }
  // tslint:disable-next-line: typedef
  crear() {
    this.router.navigate(
      [
        'admin',
        'blog',
        'create'
      ]
    );
  }
  // tslint:disable-next-line: typedef
  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar Blog');
    this.router.navigate(
      [
        'admin',
        'blog',
        'update',
        codigoaeditar
      ]
    );
  }
  // tslint:disable-next-line: typedef
  eliminar(codigo) {
    console.log(codigo);
    const codigoaeliminar = codigo;
    this.blogService.deleteBlog(codigoaeliminar).subscribe(
      res => {
        if (res) {
          this.resultado = res;
          this.router.navigate(
            [
              'admin',
              'blog',
              'list'
            ]
          );
          this.toastr.success('blog eliminado');
        } else {
          this.toastr.error('no se pudo eliminar');
        }
      }
    )
  }
  ngOnInit(): void {
    this.getBlogs();
  }

}
