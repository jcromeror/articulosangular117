import { Component, OnInit } from '@angular/core';
/*se importa la clase de usuarios service*/
import { UsuariosService } from './../services/usuarios.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {

	formulario:any;

  constructor( 
  	private _usuariosService:UsuariosService, 
  	private router:Router) {
  	this.formulario={
  		user:{
  			name:"",
  			email:"",
  			password:"",
  			password_confirmation:""
  		}
  	}
   }

  ngOnInit() {
  }

  crearCuenta(){
  	this._usuariosService.
  	crearCuenta(this.formulario).
  	subscribe(
  		respuesta=>{
  			let auth={
  				auth:{
  					email:this.formulario.user.email,
  					password:this.formulario.user.password,
  				}
  			}
  			this._usuariosService.iniciarSesion(auth).
  			subscribe(
  				respuestaAutenticacion=>{
  					localStorage.setItem("SessionToken", respuestaAutenticacion.jwt);
  					this.router.navigate(['/']);
  				},
  				errorAutenticacion=>{
  					console.log(errorAutenticacion);
  				});
  		}, 
  		error=>{
  			console.log(error);
  		})
  }

}
