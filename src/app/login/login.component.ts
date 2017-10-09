import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {LoginService, User} from './login.service'

//import { AlertService, AuthenticationService } from '../_services/index';

@Component({
    templateUrl: 'login.component.html',
    providers: [LoginService],
    styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private loginService: LoginService,
    ) { }
    private rol;

    ngOnInit() {
    }

    async login(user, pass) {
      await this.loginService.login(user, pass);
    }

    isuser():boolean{
        if(localStorage.role==2){
            return true;
        }else{
            return false;
        }
    }

     isadmin():boolean{
        if(localStorage.role==1){
            return true;
        }else{
            return false;
        }
    }
    logueado():boolean{
        if(localStorage.role=="1"||localStorage.role=="2"){
            return false;
        }else{
            return true;
        }
    }
}
