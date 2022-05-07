import { BixoService } from './../_services/bixo.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDosBixosComponent } from './cards/lista-dos-bixos/lista-dos-bixos.component';
import { FichaProBixoComponent } from './cards/ficha-pro-bixo/ficha-pro-bixo.component';
import { HttpClientModule } from '@angular/common/http';
import { CaixaDeStatusComponent } from './cards/caixa-de-status/caixa-de-status.component';
import { TiposDoBixoComponent } from './cards/tipos-do-bixo/tipos-do-bixo.component';
import { MiniaturaDoBixoComponent } from './cards/miniatura-do-bixo/miniatura-do-bixo.component';
import { FrenteDoCardComponent } from './cards/frente-do-card/frente-do-card.component';
import { VersoDoCardComponent } from './cards/verso-do-card/verso-do-card.component';
import { StatusIndividualComponent } from './cards/status-individual/status-individual.component';
import { BarrinhaComponent } from './barrinha/barrinha.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { FormsModule } from '@angular/forms';
import { PseudokedexComponent } from './pseudokedex/pseudokedex.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDosBixosComponent,
    FichaProBixoComponent,
    CaixaDeStatusComponent,
    TiposDoBixoComponent,
    MiniaturaDoBixoComponent,
    FrenteDoCardComponent,
    VersoDoCardComponent,
    StatusIndividualComponent,
    BarrinhaComponent,
    BuscadorComponent,
    PseudokedexComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    BixoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
