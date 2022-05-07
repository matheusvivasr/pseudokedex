import { Observable, of, Subscription, tap } from 'rxjs';
import { Bixo } from './../../_model/bixo';
import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BixoService } from 'src/_services/bixo.service';


@Component({
  selector: 'app-pseudokedex',
  templateUrl: './pseudokedex.component.html',
  styleUrls: ['./pseudokedex.component.css']
})
export class PseudokedexComponent implements OnDestroy{
  listaFinal: Bixo[] = [];

  $buscaListener: Subscription;
  
  constructor(public bixoService: BixoService, private caminho:ActivatedRoute){
    this.listaFinal = this.bixoService.getBixos();
    this.$buscaListener = this.bixoService.$novaBusca
      .pipe(
        tap((resultado: Bixo[]) => {
          this.listaFinal = resultado;
        })
      )
      .subscribe();
  }
  ngOnDestroy(): void {
    this.$buscaListener.unsubscribe();
  }
}