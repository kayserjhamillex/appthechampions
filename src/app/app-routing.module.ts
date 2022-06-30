import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecuperarComponent } from './recuperar/recuperar.component';

const routes: Routes = [
  {
    path:'recuperar/:id',
    component: RecuperarComponent
  },
  {
    path: 'recuperacion/:id',
    redirectTo: 'auth/password/:id',
    pathMatch: 'prefix'
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'prefix'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
