import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component'
import {DatosComponent} from './datos/datos.component'
import {AdminComponent} from './admin/admin.component'
import {HeaderComponent} from './header/header.component'

//import { routes } from './app.routing';
import { AppRoutingModule } from './app.routing';
import { MenuComponent } from './menu/menu.component';
import { ListartComponent } from './listart/listart.component';
import { ArticuloComponent } from './articulo/articulo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DatosComponent,
    AdminComponent,
    HeaderComponent,
    MenuComponent,
    ListartComponent,
    ArticuloComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  bootstrap: [AppComponent]

})



export class AppModule { }
