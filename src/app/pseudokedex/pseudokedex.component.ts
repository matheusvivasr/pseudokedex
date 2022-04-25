import { FiltroBuscadorPipe } from './../../_filters/filtro-buscador.pipe';
import { BixoService } from './../../_services/bixo.service';
import { Bixo } from './../../_model/bixo'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pseudokedex',
  templateUrl: './pseudokedex.component.html',
  styleUrls: ['./pseudokedex.component.css']
})
export class PseudokedexComponent implements OnInit{

  bixos:Bixo[] =[]
  constructor(public bixoService: BixoService, private rotas:ActivatedRoute ) {}

  ngOnInit(): void {
    this.rotas.params.subscribe(params =>{
      if(params['buscaBixo'])
        this.bixos = this.bixoService.bixos.filter(bixo => bixo.nome.toLocaleLowerCase().includes(params['buscaBixo'].toLocaleLowerCase()))
      else
        this.bixos = this.bixoService.bixos
    })
  }

}
