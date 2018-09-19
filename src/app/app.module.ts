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

/*aqui se llama nuestro archivo creado de servicios*/
import { UsuariosService } from './services/usuarios.service';

import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './inicio/inicio.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';

/*se crea para trabajar con las rutas de la aplicacion*/
const rutas:Routes=[
	{path:"", component:InicioComponent},
	{path:'iniciar_sesion', component:IniciarSesionComponent},
	{path:"crear_cuenta", component:CrearCuentaComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    /*se llama para las rutas*/
    IniciarSesionComponent,
    InicioComponent,
    CabeceraComponent,
    PiePaginaComponent,
    CrearCuentaComponent
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
  	UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
