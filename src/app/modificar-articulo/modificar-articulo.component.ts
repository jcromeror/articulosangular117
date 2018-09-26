import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticulosService} from './../services/articulos.service';



@Component({
  selector: 'app-modificar-articulo',
  templateUrl: './modificar-articulo.component.html',
  styleUrls: ['./modificar-articulo.component.css']
})
export class ModificarArticuloComponent implements OnInit {
	articulo:any;

  constructor( 
  	private _articulosService:ArticulosService,
  	private _ruta:ActivatedRoute,
  	private _router:Router
  	) { 
  	this.articulo={
  		titulo:"",
  		contenido:""
  	}
  }

  ngOnInit() {
  	this._ruta.params.subscribe(
  		respuesta=>{
  			this._articulosService.mostrarArticulo(respuesta.id).subscribe(
  				respuestaArticulo=>{
  					this.articulo = respuestaArticulo;
  				}, errorArticulo=>{
  					console.log(errorArticulo);
  				});
  		}, error=>{
  			console.log(error);
  		});
  }

  modificarArticulo(){
  	this._articulosService.modificarArticulo(this.articulo).subscribe(
  		respuesta=>{
  			/*es como se hiciera un click la misma funcion 
  			del RouterLink navegar a una ruta*/
  			this._router.navigate(['/mostrar_articulo', this.articulo.id]);
  		}, error=>{
  			console.log(error);
  		})
  }

}
