import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindingComponent } from './componentes/binding/binding.component';
import { EstructuraComponent } from './componentes/estructura/estructura.component';
import { AtributosComponent } from './componentes/atributos/atributos.component';
import { FormulariosComponent } from './componentes/formularios/formularios.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    EstructuraComponent,
    AtributosComponent,
    FormulariosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
