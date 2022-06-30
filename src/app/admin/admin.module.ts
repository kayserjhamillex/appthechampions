import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// componentes esenciales
// componentes del admin
import { ListAdminComponent } from './admin/list-admin/list-admin.component';
import { CreateAdminComponent } from './admin/create-admin/create-admin.component';
import { UpdateAdminComponent } from './admin/update-admin/update-admin.component';

// componentes del cliente
import { ListClienteComponent } from './cliente/list-cliente/list-cliente.component';
import { CreateClienteComponent } from './cliente/create-cliente/create-cliente.component';
import { UpdateClienteComponent } from './cliente/update-cliente/update-cliente.component';

// todos los componentes


// componente principal

// componentes admin

// componente empresa

// componentes cliente

// componentes blog

// componentes field

// componentes testimonio

// componentes comentario

// componentes chat

// componentes horario

// componentes reportes

// componentes local

// componentes procesos
import { CreateBlogComponent } from './blog/create-blog/create-blog.component';
import { ListBlogComponent } from './blog/list-blog/list-blog.component';
import { UpdateBlogComponent } from './blog/update-blog/update-blog.component';
import { UpdateFieldComponent } from './field/update-field/update-field.component';
import { ListFieldComponent } from './field/list-field/list-field.component';
import { CreateFieldComponent } from './field/create-field/create-field.component';
import { WorkingComponent } from './working/working.component';
import { CreateTestimonioComponent } from './testimonio/create-testimonio/create-testimonio.component';
import { ListTestimonioComponent } from './testimonio/list-testimonio/list-testimonio.component';
import { UpdateTestimonioComponent } from './testimonio/update-testimonio/update-testimonio.component';
import { HomeComponent } from './home/home.component';
import { ViewEmpresaComponent } from './empresa/view-empresa/view-empresa.component';
import { UpdateEmpresaComponent } from './empresa/update-empresa/update-empresa.component';
import { UpdateHorarioComponent } from './horario/update-horario/update-horario.component';
import { CreateHorarioComponent } from './horario/create-horario/create-horario.component';
import { ListHorarioComponent } from './horario/list-horario/list-horario.component';
import { ListChatComponent } from './chat/list-chat/list-chat.component';
import { AnswerChatComponent } from './chat/answer-chat/answer-chat.component';
import { ChatComponent } from './chat/chat/chat.component';
import { UpdateComentarioComponent } from './comentario/update-comentario/update-comentario.component';
import { ListComentarioComponent } from './comentario/list-comentario/list-comentario.component';
import { ListBlogcomentarioComponent } from './comentario/list-blogcomentario/list-blogcomentario.component';
import { ListReportesComponent } from './reportes/list-reportes/list-reportes.component';
import { Reporte1Component } from './reportes/reporte1/reporte1.component';
import { Reporte2Component } from './reportes/reporte2/reporte2.component';
import { Reporte3Component } from './reportes/reporte3/reporte3.component';
import { Reporte4Component } from './reportes/reporte4/reporte4.component';
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

// para los avisos al cliente
import { ToastrModule } from 'ngx-toastr';

// para los formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// importaciones del coreui
import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import 3rd party components
import { ChartsModule } from 'ng2-charts';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG  } from 'ngx-perfect-scrollbar';

// para los reportes con barras :v
import {ChartModule} from 'primeng/chart';
// accordion and accordion tab
import {AccordionModule} from 'primeng/accordion';
// api
import {MenuItem} from 'primeng/api';

// para los reportes
import { ExportAsModule } from 'ngx-export-as';
import { ReservacionComponent } from './local/reservacion/reservacion.component';
import { PostergacionComponent } from './local/postergacion/postergacion.component';
import { CancelacionComponent } from './local/cancelacion/cancelacion.component';
import { ConfirmacionComponent } from './local/confirmacion/confirmacion.component';
import { AtencionComponent } from './local/atencion/atencion.component';
import { Reporte5Component } from './reportes/reporte5/reporte5.component';
import { Reporte6Component } from './reportes/reporte6/reporte6.component';
import { Subproceso1de4Component } from './procesos/proceso4/subproceso1de4/subproceso1de4.component';


// para corregir el error del refresheo
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
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
import { Subproceso2de9Component } from './procesos/proceso9/subproceso2de9/subproceso2de9.component';



@NgModule({
  declarations: [AdminComponent, CreateAdminComponent, ListAdminComponent, UpdateAdminComponent, CreateBlogComponent, ListBlogComponent, UpdateBlogComponent, CreateClienteComponent, ListClienteComponent, UpdateClienteComponent, UpdateFieldComponent, ListFieldComponent, CreateFieldComponent, WorkingComponent, CreateTestimonioComponent, ListTestimonioComponent, UpdateTestimonioComponent, HomeComponent, ViewEmpresaComponent, UpdateEmpresaComponent, UpdateHorarioComponent, CreateHorarioComponent, ListHorarioComponent, ListChatComponent, AnswerChatComponent, ChatComponent, UpdateComentarioComponent, ListComentarioComponent, ListBlogcomentarioComponent, ListReportesComponent, Reporte1Component, Reporte2Component, Reporte3Component, Reporte4Component, Subproceso1Component, Subproceso2Component, Subproceso3Component, Subproceso1de2Component, Subproceso2de2Component, Subproceso3de2Component, Subproceso4de2Component, Subproceso1de3Component, Subproceso2de3Component, Subproceso3de3Component, ReservacionComponent, PostergacionComponent, CancelacionComponent, ConfirmacionComponent, AtencionComponent, Reporte5Component, Reporte6Component, Subproceso1de4Component, Subproceso1de5Component, Subproceso2de5Component, Subproceso1de6Component, Subproceso2de6Component, Subproceso3de6Component, Subproceso1de7Component, Subproceso2de7Component, Subproceso3de7Component, Subproceso1de8Component, Subproceso2de8Component, Subproceso1de9Component, Subproceso2de9Component],
  imports: [
    CommonModule,
    AdminRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    // primeng
    AccordionModule,
    ChartModule,
    ReactiveFormsModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppHeaderModule,
    AppFooterModule,
    AppSidebarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    PerfectScrollbarModule,
    ToastrModule.forRoot(),
    ExportAsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
})
export class AdminModule { }
