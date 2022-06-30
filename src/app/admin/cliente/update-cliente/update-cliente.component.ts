import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';
import { Genero } from 'src/app/models/genero.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.component.html',
  styleUrls: ['./update-cliente.component.css']
})
export class UpdateClienteComponent implements OnInit {
  cliente: Cliente = {
    id: 0,
    Fullname: '',
    Numerodocumento: '',
    Email: '',
    Password: '',
    ImagenCliente: '',
    Google: '0'
  };
  genero: Genero [] = [
    {
      id: 1,
      name: 'Masculino'
    },
    {
      id: 2,
      name: 'Femenino'
    }
  ];
  hombre = 'https://fieldsports.herokuapp.com/stylesheets/usuarios/man.png';
  mujer = 'https://fieldsports.herokuapp.com/stylesheets/usuarios/women.png';
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
  ) { }
  // tslint:disable-next-line: typedef
  updateCliente() {
    const params = this.activatedRoute.snapshot.params;
    this.clienteService.updateCliente(params.id, this.cliente).subscribe(
        res => {
          console.log(res);
          this.router.navigate(
            [
              'admin',
              'cliente',
              'list'
            ]
          );
          this.toastr.success('actualizando los datos del cliente');
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
      this.clienteService.getCliente(params.id).subscribe(
        res => {
          console.log(res);
          this.cliente = res;
        },
        err => console.log(err)
      );
    }
  }
  // tslint:disable-next-line: typedef
  cambiarimagen(valor) {
    if (valor === 'Masculino') {
    this.cliente.ImagenCliente = this.hombre;
    } else if (valor === 'Femenino') {
      this.cliente.ImagenCliente = this.mujer;
    }
  }

}
