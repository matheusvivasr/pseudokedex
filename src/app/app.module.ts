import { BixoService } from './../_services/bixo.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDosBixosComponent } from './lista-dos-bixos/lista-dos-bixos.component';
import { FichaProBixoComponent } from './cartoes/ficha-pro-bixo/ficha-pro-bixo.component';
import { HttpClientModule } from '@angular/common/http';
import { CaixaDeStatusComponent } from './cartoes/caixa-de-status/caixa-de-status.component';
import { TiposDoBixoComponent } from './cartoes/tipos-do-bixo/tipos-do-bixo.component';
import { MiniaturaDoBixoComponent } from './cartoes/miniatura-do-bixo/miniatura-do-bixo.component';
import { FrenteDoCardComponent } from './cartoes/frente-do-card/frente-do-card.component';
import { VersoDoCardComponent } from './cartoes/verso-do-card/verso-do-card.component';
import { StatusIndividualComponent } from './cartoes/status-individual/status-individual.component';
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
