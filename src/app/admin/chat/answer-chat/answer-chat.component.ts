import { Chat } from 'src/app/models/chat';
import { ToastrService } from 'ngx-toastr';
import { Mensaje } from 'src/app/models/mensaje';
import { Component, OnInit } from '@angular/core';
import { Chatmodel } from 'src/app/models/chatmodel';
import { ActivatedRoute, Router } from '@angular/router';
import { Mensajemodel } from 'src/app/models/mensajemodel';
import { ChatService } from 'src/app/services/chat.service';
import { MensajeService } from 'src/app/services/mensaje.service';

@Component({
  selector: 'app-answer-chat',
  templateUrl: './answer-chat.component.html',
  styleUrls: ['./answer-chat.component.css']
})
export class AnswerChatComponent implements OnInit {
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
    private activatedRoute: ActivatedRoute,
    private mensajeService: MensajeService,
  ) { }
  // tslint:disable-next-line: typedef
  wasa() {
    console.log(this.mensaje.Mensaje);
    if (this.mensaje.Mensaje !== '') {
      this.mensaje.Mensaje = '';
    }
  }
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    const codigo = params.id;
    this.codigochat = codigo;
    this.chatService.getChat(codigo).subscribe(
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

}
