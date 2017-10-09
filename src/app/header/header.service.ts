import { Injectable } from '@angular/core';
import { Http , URLSearchParams , Response, Headers, RequestOptions } from '@angular/http';
import {User} from '../login/login.service'

import { Observable } from 'rxjs/Rx';


@Injectable()
export class HeaderService {


  constructor(private http: Http) {}

 openNav() {
    document.getElementById("mySidenav").style.width = "70%";
    // document.getElementById("flipkart-navbar").style.width = "50%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

 closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
}

}