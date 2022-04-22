import { BixoService } from './../../_services/bixo.service';
import { Bixo } from './../../_model/bixo';
import { Tipo } from './../../_model/tipo';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-dos-bixos',
  templateUrl: './lista-dos-bixos.component.html',
  styleUrls: ['./lista-dos-bixos.component.css']
})
export class ListaDosBixosComponent {
    constructor(
      public bixoService: BixoService,
    ) {
    }
  }
