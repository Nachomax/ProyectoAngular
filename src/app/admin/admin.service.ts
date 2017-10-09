import { Injectable } from '@angular/core';
import { Http , URLSearchParams , Response, Headers, RequestOptions } from '@angular/http';
import {User} from '../login/login.service'

import { Observable } from 'rxjs/Rx';


@Injectable()
export class AdminService {

  constructor(private http: Http) {}


  async getUsuarios(): Promise<User[]>{
      var head = new Headers({'Content-Type': 'application/json'});
      var url = 'http://localhost:8080/javap/webapi/myresource/getUsuarios'
      const response = await this.http.get(url, {headers: head})
      .toPromise();
      return response.json();
  }

     deleteUser(username){
        var head = new Headers({'Content-Type': 'application/json'});
        var url = 'http://localhost:8080/javap/webapi/myresource/delete/'+username;
        this.http.delete(url, {headers: head})
        .toPromise();
      }

      updateu(firstname, lastname, username, password, email){
        alert(firstname)
        var head = new Headers({'Content-Type': 'application/json'});
        var url = 'http://localhost:8080/javap/webapi/myresource/update/'+password+'/'+username +'/' +name + '/'+lastname + '/' + email + '/2017-09-20/2';
        this.http.put(url, {headers: head})
        .toPromise();
      }
      altaPlataforma(url){
        var head = new Headers({'Content-Type': 'application/json'});
        alert(url);
        var urlAlta = 'http://localhost:8080/javap/webapi/restTenant/alta/'+url+'/nacho';
        this.http.post(urlAlta, {headers: head})
        .toPromise();
      }
      

}