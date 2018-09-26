/*COMANDO PARA CREAR ESTOS ARCHIVOS ES ng generate service services/articulos*/
import { Injectable } from '@angular/core';
/*Se importa para HttpClient, HttpHeaders para poder usar servicios */
import { HttpClient, HttpHeaders } from '@angular/common/http';
/*Se importa para obtener el tipo de retorno que va tener los metodos de los servicios*/
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
	/*Se crea la variable url publica */
	private url:string;
	private encabezados:any;

  constructor(private http:HttpClient) {
  	/*esta es la ruta de los servicios*/
  	this.url="https://apidocumentospiensadigital.herokuapp.com/articulos";
  	/*estos son los encabezados para el consumo de los servicios*/
  	this.encabezados={ headers: new HttpHeaders({
  		'content-Type':'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("SessionToken")
  	})}
  }

  traerArticulos():Observable<any>{
  	return this.http.get<any>(this.url, this.encabezados);

  }

  mostrarArticulo(id):Observable<any>{
    return this.http.get<any>(this.url + '/' + id, this.encabezados);
  }

  crearArticulo(articulo):Observable<any>{
    /*JSON.stringify lo que se envia convierte en json y valida que siempre 
  lo que se reciba sea json. Mantiene sierta seguridad*/
    let params=JSON.stringify(articulo); 
    return this.http.post<any>(this.url, params, this.encabezados);
  }

  modificarArticulo(articulo):Observable<any>{
    let params = JSON.stringify(articulo);
    return this.http.put<any>(this.url + '/' +articulo.id, params, this.encabezados);
  }

  eliminarArticulo(id):Observable<any>{
    return this.http.delete<any>(this.url + '/' + id, this.encabezados);
  }
}
