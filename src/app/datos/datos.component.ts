import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {DatosService} from './datos.service'

//import { AlertService, AuthenticationService } from '../_services/index';

@Component({
    templateUrl: 'datos.component.html',
    providers: [DatosService],
})

export class DatosComponent implements OnInit {
    
    
  firstname: string[]=[];
  lastname: string[]=[];
  username:  string[]=[];
  rol: string[]=[];



    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private datosService: DatosService,
    ) { }

    ngOnInit() {
    }

    datosUser(){
      this.firstname[0]=localStorage.getItem('name');
      this.lastname[0]=localStorage.getItem('lastname');
      this.rol[0]=localStorage.getItem('email');
      return true;
    }

    logout(){
      localStorage.clear();
    }


}
