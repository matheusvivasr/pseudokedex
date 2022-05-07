import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bixo } from '../_model/bixo';
import { from, finalize, Subject, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BixoService {
  
  private allBixosUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
  
  public bixos: Bixo[] = [];
  
  private $requestPokemon = this.getBixosHttp(this.allBixosUrl);
  private _$novaBusca = new Subject<Bixo[]>();

  constructor(
    private httpClient: HttpClient,
  ) {
    this.$requestPokemon.subscribe((result: any) => {
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
    
    
  }
  
  public get $novaBusca(): Observable<Bixo[]> {
    return this._$novaBusca;
  }
  
  public getBixos(): Bixo[] {
    return this.bixos;
  }

  public buscaBixos(busca: string) {
    if (busca.length === 0) {
      this._$novaBusca.next(this.bixos);
    }

    const resultadoBusca = this.getBixosByName(busca);
    this._$novaBusca.next(resultadoBusca);
  }
  
  private getBixosByName(procurado: string): Bixo[] {
    return this.bixos
      .filter(
        bixo => 
          bixo.nome
            .toLocaleLowerCase()
            .includes(procurado.toLocaleLowerCase())
      );
  }

  private getBixosHttp(url: string) {
    return this.httpClient.get<any>(url).pipe(
      map(value => value.results),
      map((value: any) => {
        return from(value).pipe(
          mergeMap((v: any) => this.httpClient.get(v.url)),
          finalize(() => this.bixos.sort(this.ordenarPokemon))
        );
      }),

      mergeMap(value => value)
    );
  }

  private ordenarPokemon(bixoA:Bixo, bixoB:Bixo) {
      if( bixoA.numero < bixoB.numero){
        return -1;
      }
      if (bixoA.numero > bixoB.numero){
        return 1;
      }
      return 0;
  }

}