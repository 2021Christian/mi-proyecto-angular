import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    EstructuraComponent,
    AtributosComponent,
    FormulariosComponent,
    ResaltarDirective,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // providers: [ClienteService],
  providers: [
    // {provide: ClienteService, useClass: ClienteService}

    // usando config useClass
    // {provide: ClienteService, useClass: ClienteServiceUseClass}

    // usando config useExisting
    // {provide: ClienteService, useExisting: ClienteServiceUseExisting}

    // usando config useFactory
    // {provide: ClienteService, useFactory: functionClienteServiceUseFactory}

    // usando config useValue
    {provide: ClienteService, useValue: {
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
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
