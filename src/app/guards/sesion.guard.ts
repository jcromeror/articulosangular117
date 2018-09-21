/*un guards permite que tenga una sesion iniciada retorna true o false si
no tiene sesion iniciada
  su comando es 
  ng generate guard guards/sesion*/

import { Injectable } from '@angular/core';
/*se importa Router y se debe inyectar*/
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SesionGuard implements CanActivate {
	/*se inyecta Router*/
	constructor(private router:Router){}
	
	/*esta propiedad se llama o se usa en app.moduls.ts agregando a 
	los servicios que se quieren ser validados por una sesion*/	
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
  	if(localStorage.getItem("SessionToken")){
  		return true;
  	}else{
  		this.router.navigate(['/iniciar_sesion']);
  		return false;
  	}
  }
}
