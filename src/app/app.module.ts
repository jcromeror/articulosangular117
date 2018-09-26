import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*Estos dos modulos se importa para funcionar el consumo de servicios 
con la clase http importada en usuario.services.ts
 */
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
/*permite trabajar con ngModel por eso no debe de faltar la importacion*/
import { FormsModule } from '@angular/forms';
/*Se importa route para el tema de rutas de la pagina o sitios*/
import { RouterModule, Routes } from '@angular/router';

/*aqui se llama nuestros archivos creados de servicios*/
import { UsuariosService } from './services/usuarios.service';
import { ArticulosService } from './services/articulos.service';

/*se importa wards para validar la sesion*/
import { SesionGuard } from './guards/sesion.guard';

import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './inicio/inicio.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { TraerArticulosComponent } from './traer-articulos/traer-articulos.component';
import { MostrarArticuloComponent } from './mostrar-articulo/mostrar-articulo.component';
import { CrearArticuloComponent } from './crear-articulo/crear-articulo.component';
import { ModificarArticuloComponent } from './modificar-articulo/modificar-articulo.component';

/*se crea para trabajar con las rutas de la aplicacion*/
const rutas:Routes=[
	{path:"", component:InicioComponent},
	{path:'iniciar_sesion', component:IniciarSesionComponent},
  {path:"crear_cuenta", component:CrearCuentaComponent},
  /*canActivate:[SesionGuard] si esta validacion retorna verdadero ejecuta el 
  componente si retorna false no lo deja pasar*/
  {path:"traer_articulos", component:TraerArticulosComponent, canActivate:[SesionGuard]},
  /*aqui se van a usar rutas dinamicas*/
  {path:"mostrar_articulo/:id", component:MostrarArticuloComponent, canActivate:[SesionGuard]},
  {path:"crear_articulo", component:CrearArticuloComponent, canActivate:[SesionGuard]},
	{path:"modificar_articulo/:id", component:ModificarArticuloComponent, canActivate:[SesionGuard]},
]

@NgModule({
  declarations: [
    AppComponent,
    /*se llama para las rutas*/
    IniciarSesionComponent,
    InicioComponent,
    CabeceraComponent,
    PiePaginaComponent,
    CrearCuentaComponent,
    TraerArticulosComponent,
    MostrarArticuloComponent,
    CrearArticuloComponent,
    ModificarArticuloComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    /*se importa FormsModule no debe de faltar*/
    FormsModule,
    /*se importa para poder navegar entre rutas*/
    RouterModule.forRoot(rutas)
  ],
  providers: [
  /*aqui se agregan todos nuestros archivos creados de servicios 
  importando en la parte superior del archivo*/
  	UsuariosService,
    ArticulosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*ng build --prod comando que crea una carpeta dist la cual entrega 
todo el codigo mimificado y esta carpeta es la que se debe de subir
la servidor para que el codigo no sea manipulado


npm install -g http-server  este comando un servidor de pruebas local 

se ubica en la carpeta del proyecto raiz y si quiere el mimificado 
se va para la carpeta dist y entra a la carpeta del proyecto y ejecuta
el comando 
http-server
y se visualiza en el localhost:8081

url guia para despliegue https://angular.io/guide/deployment

dependiendo el servidor debe de agregar sierta configuracion la cual se 
puede observar en el link anterior para cada servidor hay diferentes 
configuraciones 

*/  
