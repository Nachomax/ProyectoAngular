import { Component, OnInit } from '@angular/core';
import { ArticuloService } from './articulo.service'


@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
  providers: [ArticuloService],
})
export class ArticuloComponent implements OnInit {

  constructor(private articuloService: ArticuloService) { }

  ngOnInit() {
  }

  altaArt(nombre, precio, descripcion, idCat){
    alert(nombre + precio+ descripcion+idCat)
    this.articuloService.altaArticulo(nombre, precio, descripcion, idCat);
  }
}
