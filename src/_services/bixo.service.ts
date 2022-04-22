import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bixo } from '../_model/bixo';
import { from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BixoService {

  public bixos: Bixo[] = [];

  constructor(
    private httpClient: HttpClient,
  ) {
    const allBixosUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=25';

    this.httpClient.get<any>(allBixosUrl).pipe(
      map(value => value.results),
      map((value: any) => {
        return from(value).pipe(
          mergeMap((v: any) => this.httpClient.get(v.url)),
        );
        
      }),
      
      mergeMap(value => value),
    ).subscribe((result: any) => this.bixos[result.id] = {
      foto: result.sprites.front_default,
      numero: result.id,
      nome: result.name,
      tipos: result.types.map((t:any) => t.type.name),
    });
  }
}