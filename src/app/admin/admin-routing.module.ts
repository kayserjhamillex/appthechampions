import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// componente padre
import { AdminComponent } from './admin.component';
// componente principal
import { HomeComponent } from './home/home.component';
// componentes admin
import { ListAdminComponent } from './admin/list-admin/list-admin.component';
import { CreateAdminComponent } from './admin/create-admin/create-admin.component';
import { UpdateAdminComponent } from './admin/update-admin/update-admin.component';
// componente empresa
import { ViewEmpresaComponent } from './empresa/view-empresa/view-empresa.component';
import { UpdateEmpresaComponent } from './empresa/update-empresa/update-empresa.component';
// componentes cliente
import { ListClienteComponent } from './cliente/list-cliente/list-cliente.component';
import { CreateClienteComponent } from './cliente/create-cliente/create-cliente.component';
import { UpdateClienteComponent } from './cliente/update-cliente/update-cliente.component';
// componentes blog
import { ListBlogComponent } from './blog/list-blog/list-blog.component';
import { CreateBlogComponent } from './blog/create-blog/create-blog.component';
import { UpdateBlogComponent } from './blog/update-blog/update-blog.component';
// componentes field
import { ListFieldComponent } from './field/list-field/list-field.component';
import { CreateFieldComponent } from './field/create-field/create-field.component';
import { UpdateFieldComponent } from './field/update-field/update-field.component';
// componentes testimonio
import { ListTestimonioComponent } from './testimonio/list-testimonio/list-testimonio.component';
import { CreateTestimonioComponent } from './testimonio/create-testimonio/create-testimonio.component';
import { UpdateTestimonioComponent } from './testimonio/update-testimonio/update-testimonio.component';
// componentes comentario
import { ListComentarioComponent } from './comentario/list-comentario/list-comentario.component';
import { UpdateComentarioComponent } from './comentario/update-comentario/update-comentario.component';
import { ListBlogcomentarioComponent } from './comentario/list-blogcomentario/list-blogcomentario.component';
// componentes chat
import { ListChatComponent } from './chat/list-chat/list-chat.component';
import { AnswerChatComponent } from './chat/answer-chat/answer-chat.component';
// componentes horario
import { ListHorarioComponent } from './horario/list-horario/list-horario.component';
import { CreateHorarioComponent } from './horario/create-horario/create-horario.component';
// componentes reportes
import { Reporte1Component } from './reportes/reporte1/reporte1.component';
import { Reporte2Component } from './reportes/reporte2/reporte2.component';
import { Reporte3Component } from './reportes/reporte3/reporte3.component';
import { Reporte4Component } from './reportes/reporte4/reporte4.component';
import { Reporte5Component } from './reportes/reporte5/reporte5.component';
import { Reporte6Component } from './reportes/reporte6/reporte6.component';
// componentes local
import { AtencionComponent } from './local/atencion/atencion.component';
import { ReservacionComponent } from './local/reservacion/reservacion.component';
import { CancelacionComponent } from './local/cancelacion/cancelacion.component';
import { ConfirmacionComponent } from './local/confirmacion/confirmacion.component';
import { PostergacionComponent } from './local/postergacion/postergacion.component';
// componentes procesos
import { Subproceso1Component } from './procesos/proceso1/subproceso1/subproceso1.component';
import { Subproceso2Component } from './procesos/proceso1/subproceso2/subproceso2.component';
import { Subproceso3Component } from './procesos/proceso1/subproceso3/subproceso3.component';
import { Subproceso1de2Component } from './procesos/proceso2/subproceso1de2/subproceso1de2.component';
import { Subproceso2de2Component } from './procesos/proceso2/subproceso2de2/subproceso2de2.component';
import { Subproceso3de2Component } from './procesos/proceso2/subproceso3de2/subproceso3de2.component';
import { Subproceso4de2Component } from './procesos/proceso2/subproceso4de2/subproceso4de2.component';
import { Subproceso1de3Component } from './procesos/proceso3/subproceso1de3/subproceso1de3.component';
import { Subproceso2de3Component } from './procesos/proceso3/subproceso2de3/subproceso2de3.component';
import { Subproceso3de3Component } from './procesos/proceso3/subproceso3de3/subproceso3de3.component';
import { Subproceso1de4Component } from './procesos/proceso4/subproceso1de4/subproceso1de4.component';

// para los procesos que estan en trabajo
import { WorkingComponent } from './working/working.component';
import { Subproceso1de5Component } from './procesos/proceso5/subproceso1de5/subproceso1de5.component';
import { Subproceso2de5Component } from './procesos/proceso5/subproceso2de5/subproceso2de5.component';
import { Subproceso1de6Component } from './procesos/proceso6/subproceso1de6/subproceso1de6.component';
import { Subproceso2de6Component } from './procesos/proceso6/subproceso2de6/subproceso2de6.component';
import { Subproceso3de6Component } from './procesos/proceso6/subproceso3de6/subproceso3de6.component';
import { Subproceso1de7Component } from './procesos/proceso7/subproceso1de7/subproceso1de7.component';
import { Subproceso2de7Component } from './procesos/proceso7/subproceso2de7/subproceso2de7.component';
import { Subproceso3de7Component } from './procesos/proceso7/subproceso3de7/subproceso3de7.component';
import { Subproceso1de8Component } from './procesos/proceso8/subproceso1de8/subproceso1de8.component';
import { Subproceso2de8Component } from './procesos/proceso8/subproceso2de8/subproceso2de8.component';
import { Subproceso1de9Component } from './procesos/proceso9/subproceso1de9/subproceso1de9.component';
import { ListReportesComponent } from './reportes/lst-reportes/list-reportes.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'cliente',
        children: [
          {
            path: 'list',
            component: ListClienteComponent
          },
          {
            path: 'create',
            component: CreateClienteComponent
          },
          {
            path: 'update/:id',
            component: UpdateClienteComponent
          }
        ]
      },
      {
        path: 'blog',
        children: [
          {
            path: 'list',
            component: ListBlogComponent
          },
          {
            path: 'create',
            component: CreateBlogComponent
          },
          {
            path: 'update/:id',
            component: UpdateBlogComponent
          },
        ]
      },
      {
        path: 'empresa',
        children: [
          {
            path: 'view',
            component: ViewEmpresaComponent
          },
          {
            path: 'update',
            component: UpdateEmpresaComponent
          },
        ]
      },
      {
        path: 'field',
        children: [
          {
            path: 'list',
            component: ListFieldComponent
          },
          {
            path: 'create',
            component: CreateFieldComponent
          },
          {
            path: 'update/:id',
            component: UpdateFieldComponent
          },
        ]
      },
      {
        path: 'admin',
        children: [
          {
            path: 'list',
            component: ListAdminComponent
          },
          {
            path: 'create',
            component: CreateAdminComponent
          },
          {
            path: 'update/:id',
            component: UpdateAdminComponent
          },
        ]
      },
      {
        path: 'horario',
        children: [
          {
            path: 'list',
            component: ListHorarioComponent
          },
          {
            path: 'create',
            component: CreateHorarioComponent
          },
          // {
          //   path: 'update/:id',
          //   component: UpdateHorarioComponent
          // },
        ]
      },
      {
        path: 'testimonio',
        children: [
          {
            path: 'list',
            component: ListTestimonioComponent
          },
          {
            path: 'create',
            component: CreateTestimonioComponent
          },
          {
            path: 'update/:id',
            component: UpdateTestimonioComponent
          },
        ]
      },
      {
        path: 'comentarios',
        children: [
          {
            path: 'listblog',
            component: ListBlogcomentarioComponent
          },
          {
            path: 'list/:id',
            component: ListComentarioComponent
          },
          {
            path: 'update/:id',
            component: UpdateComentarioComponent
          },
        ]
      },
      {
        path: 'chat',
        children: [
          {
            path: 'list',
            component: ListChatComponent,
          },
          {
            path: 'answer/:id',
            component: AnswerChatComponent
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            component: HomeComponent
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            component: HomeComponent
          }
        ]
      },
      {
        path: 'reportes',
        children: [
          {
            path: 'list',
            component: ListReportesComponent
          },
          {
            path: 'reporte1',
            component: Reporte1Component
          },
          {
            path: 'reporte2',
            component: Reporte2Component
          },
          {
            path: 'reporte3',
            component: Reporte3Component
          },
          {
            path: 'reporte4',
            component: Reporte4Component
          },
          {
            path: 'reporte5',
            component: Reporte5Component
          },
          {
            path: 'reporte6',
            component: Reporte6Component
          },
        ]
      },
      {
        path: 'local',
        children: [
          {
            path: 'reservacion',
            component: ReservacionComponent
          },
          {
            path: 'confirmacion',
            component: ConfirmacionComponent
          },
          {
            path: 'postergacion',
            component: PostergacionComponent
          },
          {
            path: 'atencion',
            component: AtencionComponent
          },
          {
            path: 'cancelacion',
            component: CancelacionComponent
          },
        ]
      },
      {
        path: 'procesos',
        children: [
          {
            path: 'proceso1',
            children: [
              {
                path: 'subproceso1',
                component: Subproceso1Component
              },
              {
                path: 'subproceso2/:id/:cliente/:fecha',
                component: Subproceso2Component
              },
              {
                path: 'subproceso3/:id',
                component: Subproceso3Component
              }
            ]
          },
          {
            path: 'proceso2',
            children: [
              {
                path: 'subproceso1',
                component: Subproceso1de2Component,
              },
              {
                path: 'subproceso2/:id/:reserva/:fecha',
                component: Subproceso2de2Component
              },
              {
                path: 'subproceso3/:id',
                component: Subproceso3de2Component
              }
            ]
          },
          {
            path: 'proceso3',
            children: [
              {
                path: 'subproceso1',
                component: Subproceso1de3Component
              },
              {
                path: 'subproceso2/:id/:cliente',
                component: Subproceso2de3Component
              },
              {
                path: 'subproceso3/:id',
                component: Subproceso3de3Component
              }
            ]
          },
          {
            path: 'proceso4',
            children: [
              {
                path: 'subproceso1',
                component: Subproceso1de4Component
              }
            ]
          },
          {
            path: 'proceso5',
            children: [
              {
                path: 'subproceso1',
                component: Subproceso1de5Component
              },
              {
                path: 'subproceso2/:id',
                component: Subproceso2de5Component
              }
            ]
          },
          {
            path: 'proceso6',
            children: [
              {
                path: 'subproceso1',
                component: Subproceso1de6Component,
              },
              {
                path: 'subproceso2/:id/:cliente/:fecha',
                component: Subproceso2de6Component
              },
              {
                path: 'subproceso3/:id',
                component: Subproceso3de6Component
              }
            ]
          },
          {
            path: 'proceso7',
            children: [
              {
                path: 'subproceso1',
                component: Subproceso1de7Component,
              },
              {
                path: 'subproceso2/:id/:reserva/:fecha',
                component: Subproceso2de7Component
              },
              {
                path: 'subproceso3/:id',
                component: Subproceso3de7Component
              }
            ]
          },
          {
            path: 'proceso8',
            children: [
              {
                path: 'subproceso1',
                component: Subproceso1de8Component
              },
              {
                path: 'subproceso2/:id',
                component: Subproceso2de8Component
              }
            ]
          },
          {
            path: 'proceso9',
            children: [
              {
                path: 'subproceso1',
                component: Subproceso1de9Component
              },
              // {
              //   path: 'subproceso2/:id',
              //   component: Subproceso2de8Component
              // }
            ]
          },
        ]
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
