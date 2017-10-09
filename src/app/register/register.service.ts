import { Injectable } from '@angular/core';
import { Http , URLSearchParams , Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class RegisterService {


  constructor(private http: Http) {}


    register(name: string, lastname: string, username: string, password: string, email: string) { 
      alert(name)
        var head = new Headers({'Content-Type': 'application/json'}); 
        var url = 'http://localhost:8080/javap/webapi/myresource/alta/'+password+'/'+username +'/' +name + '/'+lastname + '/' + email + '/2017-09-20/2';   
      return this.http
      .post(url, {headers: head})
      .toPromise()
    }
}
