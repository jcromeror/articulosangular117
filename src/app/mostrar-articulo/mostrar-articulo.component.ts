import { Component, OnInit } from '@angular/core';
/*se importa la clase ActivatedRoute*/
import { ActivatedRoute } from '@angular/router';
import { ArticulosService } from './../services/articulos.service'


@Component({
  selector: 'app-mostrar-articulo',
  templateUrl: './mostrar-articulo.component.html',
  styleUrls: ['./mostrar-articulo.component.css']
})
export class MostrarArticuloComponent implements OnInit {
	articulo:any;

  constructor( 
  	private ruta:ActivatedRoute, 
  	private _articulosService:ArticulosService) { 

  	this.articulo={titulo:"", contenido:""}
  }

  ngOnInit() {
  	this.ruta.params.subscribe(parametros=>{
  		this._articulosService.mostrarArticulo(parametros['id']).
  		subscribe(respuestaArticulo=>{
  			this.articulo=respuestaArticulo;
  		},errorArticulo=>{
  			console.log(errorArticulo)
  		});
  	}, error=>{

  	})
  }

}
