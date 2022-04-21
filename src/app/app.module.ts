import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDosBixosComponent } from './lista-dos-bixos/lista-dos-bixos.component';
import { FichaProBixoComponent } from './ficha-pro-bixo/ficha-pro-bixo.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDosBixosComponent,
    FichaProBixoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }