import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './../services/articulos.service'


@Component({
  selector: 'app-traer-articulos',
  templateUrl: './traer-articulos.component.html',
  styleUrls: ['./traer-articulos.component.css']
})
export class TraerArticulosComponent implements OnInit {

	articulos:Array<any>;

  constructor( private _articulosService:ArticulosService) {
  	/*este es un ejemplo de la estructura que va responder el servicio*/
  	this.articulos=[{titulo:"", contenido:""}]
  }

/*este se ejecuta despues del constructor y en este metodo se pueden nombrar 
o inicializar variables */
  ngOnInit() {
  	this.traerArticulos();
  }

  traerArticulos(){
    this._articulosService.
    traerArticulos().
    subscribe(respuesta=>{
      this.articulos=respuesta;
    }, 
      error=>{
        console.log(error);
    });

  }

  eliminarArticulo(id){
    /*la siguiente variable pregunta si desea eliminar*/
    let confirmar:boolean=confirm('¿Estas seguro?');
    if (confirmar == true){
      this._articulosService.eliminarArticulo(id).
      subscribe(respuesta=>{
        this.traerArticulos();
      },error=>{
         console.log(error);
      });
    }
  }
}
