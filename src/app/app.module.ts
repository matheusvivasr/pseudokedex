import { BixoService } from './../_services/bixo.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDosBixosComponent } from './lista-dos-bixos/lista-dos-bixos.component';
import { FichaProBixoComponent } from './ficha-pro-bixo/ficha-pro-bixo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListaDosBixosComponent,
    FichaProBixoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    BixoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
