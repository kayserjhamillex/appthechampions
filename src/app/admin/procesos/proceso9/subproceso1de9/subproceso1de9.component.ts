import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Chat } from 'src/app/models/chat';
import { Mensaje } from 'src/app/models/mensaje';
import { Component, OnInit } from '@angular/core';
import { Reservita } from 'src/app/models/reservita';
import { Chatmodel } from 'src/app/models/chatmodel';
import { Mensajemodel } from 'src/app/models/mensajemodel';
import { ChatService } from 'src/app/services/chat.service';
import { MensajeService } from 'src/app/services/mensaje.service';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-subproceso1de9',
  templateUrl: './subproceso1de9.component.html',
  styleUrls: ['./subproceso1de9.component.css']
})
export class Subproceso1de9Component implements OnInit {
  bandera = true;
  lasreservas: any = [];
  filtrados: any = [];
  reserva: Reservita = {
    id: 0,
    FechaReserva: new Date(),
    Estado: '',
    Pago: '',
    AdminId: 1,
    ClienteId: 0
  };
  mss: any;
  mss2: any;
  chat: Chat = {
    id: 0,
    FechaCreacion: new Date(),
    Estado: '',
    AdminId: 0,
    ClienteId: 0
  };
  chat1: Chat = {
    id: 0,
    FechaCreacion: new Date(),
    Estado: '',
    AdminId: 0,
    ClienteId: 0
  };
  chatmodel: Chatmodel = {
    id: 0,
    FechaCreacion: new Date(),
    Estado: '',
    AdminId: 0,
    ClienteId: 0,
    admin: {
      id: 0,
      Fullname: ''
    },
    cliente: {
      id: 0,
      Fullname: '',
      ImagenCliente: ''
    }
  };
  chatmodel1: any = this.chatmodel;
  mensaje: Mensaje = {
    id: 0,
    FechaEnvio: new Date(),
    Mensaje: '',
    Direccion: '',
    ChatId: 0,
  };
  mensaje1: Mensaje = {
    id: 0,
    FechaEnvio: new Date(),
    Mensaje: '',
    Direccion: '',
    ChatId: 0,
  };
  mensajemodel: Mensajemodel = {
    id: 0,
    FechaEnvio: new Date(),
    HoraEnvio: new Date(),
    Mensaje: '',
    Direccion: '',
    ChatId: 0,
    chat: {
      id: 0,
      FechaCreacion: new Date(),
      Estado: '',
      AdminId: 0,
      ClienteId: 0,
      cliente: {
        id: 0,
        Fullname: '',
        ImagenCliente: ''
      }
    }
  };
  mensajemodel1: any = this.mensajemodel;
  mensajes: any = [];
  codigocliente;
  codigoadmin;
  codigochat;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private chatService: ChatService,
    private reservaService: ReservaService,
    private mensajeService: MensajeService,
  ) { }
  wasa() {
    console.log(this.mensaje.Mensaje);
    if (this.mensaje.Mensaje !== '') {
      this.mensaje.Mensaje = '';
    }
  }
  // tslint:disable-next-line: typedef
  anwerchat(wasa) {
    const codigo = this.codigochat;
    this.mensaje.ChatId = codigo;
    this.mensaje.Mensaje = wasa;
    this.mensaje.Direccion = 'derecha';
    this.mensaje.FechaEnvio = new Date();
    console.log(this.mensaje);
    this.mensajeService.saveMensaje(this.mensaje).subscribe(
      res => {
        if (res) {
          this.mensaje1 = res;
          const elcodigo = this.mensaje1.ChatId;
          this.chat.Estado = 'enviado';
          this.chatService.updateChat(elcodigo, this.chat).subscribe(
            // tslint:disable-next-line: no-shadowed-variable
            res => {
              if (res) {
                this.chat1 = res;
                this.toastr.info('se respondio el mensaje');
                this.limpiar();
              } else {
                this.toastr.error('no es pudo responder');
              }
            }
          );
        }
      }
    );
  }
  // tslint:disable-next-line: typedef
  limpiar() {
    this.mensaje.Mensaje = '';
    console.log(this.mensaje);
    this.toastr.info('se limpio la caja de texto');
  }
  getreservas() {
    const hoynumber = new Date().getTime();
    let a = 0;
    const limite = 10*60;
    this.reservaService.gettopayReserva().subscribe(
      res => {
        console.log(res);
        if (res !== []) {
          this.lasreservas = res;
          this.filtrados = res;
          let diferencia = 0;
          for (const obj of this.lasreservas) {
            const parametro = new Date(obj.createdAt).getTime();
            const resta = hoynumber - parametro;
            const division = resta/6000;
            diferencia = limite - division;
            console.log(parametro);
            if (diferencia > 0) {
              this.filtrados[a].createdAt = diferencia;
            } else {
              this.filtrados[a].createdAt = 'ya vencio';
            }
            a++;
          }
          console.log(this.lasreservas);
          console.log(this.filtrados);
          console.log(hoynumber);

        } else {
          this.toastr.warning('No hay reservas por pagar');
          this.bandera = false;
        }
      },
      err => {
        this.toastr.error('Error en el Api');
      }
    );
  }
  borrar(par) {
    this.reservaService.deleteReserva(par).subscribe(
      res => {
        if (res !== null) {
          this.mss2 = res;
        }
      },
      err => {
        this.toastr.error('Error en el api');
      }
    );
  }

  pagado(par) {
    this.reservaService.getReserva(par).subscribe(
      res => {
        if (res !== null) {
          this.reserva = res;
          this.reserva.Estado = 'reservado';
          const codigo = this.reserva.id.toString();
          this.reservaService.updateReserva(codigo, this.reserva).subscribe(
            resup => {
              if (resup !== null) {
                this.mss = resup;
              }
            },
            err => {
              this.toastr.error('Error en el Api');
            }
          )
        }
      },
      err => {
        this.toastr.error('Error de Api');
      }

    );
  }
  seleccionar(par) {
    console.log(par);
    this.chatService.getClientChat(par).subscribe(
      res => {
        if (res) {
          this.chat = res;
          this.chatmodel = res;
          const codigaso = this.chat.id.toString();
          this.mensajeService.getMSSAnswers(codigaso).subscribe(
            // tslint:disable-next-line: no-shadowed-variable
            res => {
              if (res) {
                this.mensajes = res;
                this.toastr.info('mensajes con el cliente');
              } else {
                this.toastr.error('no se pueden listar los mensajes');
              }
            }
          );
        }
      }
    );
  }

  ngOnInit(): void {
    this.getreservas();
  }

}
