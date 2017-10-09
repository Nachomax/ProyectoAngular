import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import {RegisterService} from './register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService],

})
export class RegisterComponent implements OnInit {

  constructor(  private registerService: RegisterService) { }

  ngOnInit() {

    
  }
   register(firstname, lastname, username, password, email){
        this.registerService.register(firstname, lastname, username, password, email);
    }

}
