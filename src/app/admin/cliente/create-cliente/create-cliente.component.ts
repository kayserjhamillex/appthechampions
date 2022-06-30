import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';
import { Genero } from 'src/app/models/genero.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css']
})
export class CreateClienteComponent implements OnInit {
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
    private clienteService: ClienteService
  ) { }
  // tslint:disable-next-line: typedef
  saveCliente() {
    delete this.cliente.id;
    console.log(this.cliente);
    this.clienteService.saveCliente(this.cliente).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'cliente',
            'list'
          ]
        );
        this.toastr.success('Nuevo cliente creado');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo cliente');
      }
    );
  }
  ngOnInit(): void {
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
