import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {HeaderService} from './header.service'
import {RegisterService} from '../register/register.service'
import {User} from '../login/login.service'

//import { AlertService, AuthenticationService } from '../_services/index';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.css'],
    providers: [HeaderService, RegisterService],
})

export class HeaderComponent implements OnInit {
    constructor(
    ) { }

    ngOnInit() {
      this.openNav();
     this.closeNav();
    }
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
