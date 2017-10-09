import { Injectable } from '@angular/core';
import { Http , URLSearchParams , Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
export class User{
    username;
    creationdate;
    email;
    lastname;
    name;
    password;
	roleid;
}

@Injectable()
export class LoginService {


  constructor(private http: Http) {}


    async login(username: string, password: string): Promise<User>{        
            let url = "http://localhost:8080/javap/webapi/myresource/usuario/" + password + "/" + username;
            let head = new Headers({'Content-Type': 'application/json'});            
            const response = await this.http.get(url, {headers: head})
            .toPromise();
            localStorage.setItem('email',response.json().email);
            localStorage.setItem('role',response.json().role);
            localStorage.setItem('lastname', response.json().lastname);
            localStorage.setItem('name', response.json().name);
            localStorage.setItem('username', username);
            return response.json();
        }
}