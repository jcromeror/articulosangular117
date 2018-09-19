import { Component, OnInit } from '@angular/core';
/*se importa el archivos de servicios para ubicar la clase*/
import { UsuariosService } from './../services/usuarios.service';

/*Se importa para realizar el temas de vistas en la pagina*/
import { Router } from '@angular/router';



@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
	/*se crea una instancia de la clase en los argumentos del 
	constructor se inyecta
	Se usa la directiva ngModel que permite enlazar parte de html con una 
	variable javascript
	*/
	formulario:any;
  errores:boolean;

  constructor(private _usuariosService:UsuariosService, private router:Router) { 
  	this.formulario={
  		auth:{
  			email:"",
  			password:""
  		}
  	}
    this.errores = false
  }

  ngOnInit() {
  }

  iniciarSesion() {
    this.errores=false;
  	this._usuariosService.
    iniciarSesion(this.formulario).
    subscribe(respuesta=>{
      console.log(respuesta);
      /*localStorage.setItem() permite almacenar una variable para ser usada en todo el navegador
      el cual se usa en este ejemplo para almacenar el token que 
      responde el servicio*/
      localStorage.setItem("SessionToken", respuesta.jwt);
      /*esta linea se llama para que apenas cargue se cargue la vista incio*/
      this.router.navigate(['/']);
    }, error=>{
      console.log(error);
      this.errores = true;
    });
  }

}
