import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bixo } from '../_model/bixo';
import { from, finalize} from 'rxjs';
import { map, mergeMap, skip } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BixoService {

  public bixos: Bixo[] = [];

  constructor(
    private httpClient: HttpClient,
  ) {
    const allBixosUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=251';

    this.httpClient.get<any>(allBixosUrl).pipe(
      map(value => value.results),
      map((value: any) => {
        return from(value).pipe(
          mergeMap((v: any) => this.httpClient.get(v.url)),
          finalize(() => this.bixos.sort(ordenar)),
        );
      }),

      mergeMap(value => value)
    ).subscribe((result: any) => {
        this.bixos.push( {
        foto: result.sprites.front_default,
        fotoB: result.sprites.back_default,
        numero: result.id,
        nome: result.name,
        tipos: result.types.map((t:any) => t.type.name),
        vida: result.stats[0].base_stat,
        ataque: result.stats[1].base_stat,
        defesa: result.stats[2].base_stat,
        rapidez: result.stats[5].base_stat,
      })
      console.log(this.bixos)
    },
    );
    
    function ordenar(bixoA:Bixo, bixoB:Bixo) {
        if( bixoA.numero < bixoB.numero){
          return -1;
        }
        if (bixoA.numero > bixoB.numero){
          return 1;
        }
        return 0;
    }
    

  }
}