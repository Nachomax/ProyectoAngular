import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component'
import {DatosComponent} from './datos/datos.component'
import {AdminComponent} from './admin/admin.component'
import {HeaderComponent} from './header/header.component'
import { ArticuloComponent } from './articulo/articulo.component';

const routes: Routes = [
  { path: '',
      component: LoginComponent },
    { path: 'login',
      component: LoginComponent },
    { path: 'register',
      component: RegisterComponent },
      { path: 'datos',
      component: DatosComponent },
      { path: 'altaplataforma',
      component: AdminComponent },
      {path: 'altaarticulo',
      component: ArticuloComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}