import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AdminService} from './admin.service'
import {RegisterService} from '../register/register.service'
import {User} from '../login/login.service'

//import { AlertService, AuthenticationService } from '../_services/index';

@Component({
    templateUrl: 'admin.component.html',
    providers: [AdminService, RegisterService],
})

export class AdminComponent implements OnInit {
    add:boolean=false;
    update:boolean=false;
    usermod:string;
    
  users: User[] = []



    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private adminService: AdminService,
        private registerService: RegisterService
    ) { }

    ngOnInit() {
       this.getusers();
    }

    async getusers(){
      await this.adminService.getUsuarios().then(users => this.users = users);
    }

    altaPlat(url){
      this.adminService.altaPlataforma(url);
    }

    logout(){
      localStorage.clear();
    }

    crearuser(){
      this.add=true;
      this.update=false;
    }

    cancelaru(){
      this.add=false;
      this.update=false;
    }
    
    updateuser(firstname, lastname, username, password, email){
      this.adminService.updateu(firstname, lastname, username, password, email);
    }

    crearusuario(firstname, lastname, username, password, email){
      this.registerService.register(firstname, lastname, username, password, email)
    }
    
    DeleteU(username){
      this.adminService.deleteUser(username);
    }

    Update(username){
      this.usermod=username;
      this.update=true;
      this.add=false;
    }


}
