import { Injectable } from '@angular/core';
import { Http , URLSearchParams , Response, Headers, RequestOptions } from '@angular/http';
import {User} from '../login/login.service'

import { Observable } from 'rxjs/Rx';


@Injectable()
export class ArticuloService {

  constructor(private http: Http) {}


      altaArticulo(nombre, precio, descripcion, idCat){
        var head = new Headers({'Content-Type': 'application/json'});
        var urlAlta = 'http://localhost:8080/javap/webapi/restArticulos/altaArticulo/1/2017-10-10/'+precio+'/'+nombre+'/'+descripcion+'/'+idCat;
        this.http.post(urlAlta, {headers: head})
        .toPromise();
      }
      

}