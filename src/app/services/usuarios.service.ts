import { Injectable } from '@angular/core';

/* este modulo se genero con el comando 
ng generate service services/usuarios

facilita las solicitudes ademas se debe importar el modulo 
principal en el app.module.ts 
HttpClient permite enviar las solicitudes
HttpHeaders permite enviar y construir los encabezados*/
import {HttpClient, HttpHeaders} from '@angular/common/http';
/*se importa la libreria rxjs que hace referencia a la programacion reactiva*/
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
	private url:string;
	private encabezados:any;
	/*de esta manera se inyecta el servicio http client  y ya se puede 
	empezar a crear funciones ejemplo iniciarSesion()*/
  constructor(private http:HttpClient) { 
  	/*esta es la ruta de los servicios*/
  	this.url="https://apidocumentospiensadigital.herokuapp.com";
  	/*estos son los encabezados para el consumo de los servicios*/
  	this.encabezados={headers: new HttpHeaders({
  		'content-Type':'application/json'
  	})}
  }
  /*post<any> se especifica el tipo de dato que vamos a devolver
  Observable<any> igual que el anterior*/
  iniciarSesion(auth):Observable<any>{
  	return this.http.post<any>(this.url + '/user_token', auth, this.encabezados);
  }

  crearCuenta(user):Observable<any>{
  	return this.http.post<any>(this.url + '/users', user, this.encabezados);
  }
}
