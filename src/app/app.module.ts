import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BindingComponent } from './componentes/binding/binding.component';
import { EstructuraComponent } from './componentes/estructura/estructura.component';
import { AtributosComponent } from './componentes/atributos/atributos.component';
import { FormulariosComponent } from './componentes/formularios/formularios.component';
import { ResaltarDirective } from './directivas/resaltar.directive';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { ClienteService, 
  ClienteServiceUseClass, 
  ClienteServiceUseExisting, 
  functionClienteServiceUseFactory 
} from './servicios/cliente.service';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { URL_USUARIOS } from './servicios/usuarios.service';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { MimoduloModule } from './mimodulo/mimodulo.module';
import { Mimodulo2Module } from './mimodulo2/mimodulo2.module';
import { PanelComponent } from './mimodulo/componentes/panel/panel.component';
import { FamiliaComponent } from './mimodulo2/componentes/familia/familia.component';

const routes:Routes = [
  // {path: '', component: ClienteComponent},
  {path: '', redirectTo: 'binding', pathMatch: 'full'},
  {path: 'binding', component: BindingComponent},
  {path: 'estructura', component: EstructuraComponent},
  {path: 'atributos', component: AtributosComponent},
  {path: 'formularios', component: FormulariosComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'cliente/:id', component: ClienteComponent},
  {path: 'cliente/:id/:cat', component: ClienteComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'panel', component: PanelComponent},
  {path: 'familia', component: FamiliaComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    EstructuraComponent,
    AtributosComponent,
    FormulariosComponent,
    ResaltarDirective,
    ClienteComponent,
    UsuariosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {enableTracing: false} ), //enableTracing: true habilita el debug por consola
    MimoduloModule,
    Mimodulo2Module
  ],
  // providers: [ClienteService],
  providers: [
    { provide: URL_USUARIOS, useValue: 'https://623e63b2e8fbc4f1626eb58d.mockapi.io/usuarios/' },
    { provide: ClienteService, useClass: ClienteService }

    // usando config useClass
    // {provide: ClienteService, useClass: ClienteServiceUseClass}

    // usando config useExisting
    // {provide: ClienteService, useExisting: ClienteServiceUseExisting}

    // usando config useFactory
    // {provide: ClienteService, useFactory: functionClienteServiceUseFactory}

    // usando config useValue
    /* {provide: ClienteService, useValue: {
      clientes: [
        'Juan_UseValue',
        'Jose_UseValue',
        'Maria_UseValue',
        'Ana_UseValue'
      ],
      
      getClientes() { 
        return this.clientes;
      },
      
      agregarCliente(cliente:string) { 
        this.clientes.push(cliente);
      },
      
      borrarCliente() {
        this.clientes.pop();
      }
    } 
    } */
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
