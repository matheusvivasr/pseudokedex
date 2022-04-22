import { Bixo } from './../../_model/bixo';
import { Tipo } from './../../_model/tipo';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-dos-bixos',
  templateUrl: './lista-dos-bixos.component.html',
  styleUrls: ['./lista-dos-bixos.component.css']
})
export class ListaDosBixosComponent {
    public bixos: Bixo[] = [
      {
        foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
        numero: 1,
        nome: 'Bulbasaur',
        tipos: [
          Tipo.grass,
          Tipo.poison,
        ],
      },
      {
        foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
        numero: 2,
        nome: 'Ivysaur',
        tipos: [
          Tipo.grass,
          Tipo.poison,
        ],
      },
      {
        foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
        numero: 3,
        nome: 'Venosaur',
        tipos: [
          Tipo.grass,
          Tipo.poison,
        ],
      },
      {
        foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
        numero: 4,
        nome: 'Charmander',
        tipos: [
          Tipo.fire,
        ],
      },
    ];
  }
