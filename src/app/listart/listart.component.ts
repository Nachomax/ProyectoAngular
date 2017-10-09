import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listart',
  templateUrl: './listart.component.html',
  styleUrls: ['./listart.component.css']
})
export class ListartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isAdmin(){
    return true;
  }

}
