import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

// para el servidor apirest
import { HttpClientModule } from '@angular/common/http';
// modulo de autenticacion
import { AuthModule } from './auth/auth.module';
// modulo del panel administrativo
import { AdminModule } from './admin/admin.module';

// para los formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// para corregir el error del refresheo
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AdminModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
