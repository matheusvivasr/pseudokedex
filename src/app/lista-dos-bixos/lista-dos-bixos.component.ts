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
        nome: 'Charmeleon',
        tipos: [
          Tipo.fire,
        ],
      },
      {
        foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png',
        numero: 5,
        nome: 'Charmeleon',
        tipos: [
          Tipo.fire,
        ],
      },
      {
        foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
        numero: 6,
        nome: 'Charizard',
        tipos: [
          Tipo.fire,
        ],
      },
      {
        foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png',
        numero: 7,
        nome: 'Squirtle',
        tipos: [
          Tipo.water,
        ],
      },
      {
        foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png',
        numero: 8,
        nome: 'Wartortle',
        tipos: [
          Tipo.water,
        ],
      },
      {
        foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png',
        numero: 9,
        nome: 'Blastoise',
        tipos: [
          Tipo.water,
        ],
      },
      {
        foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png',
        numero: 10,
        nome: 'Caterpie',
        tipos: [
          Tipo.bug,
        ],
      },
      {
        foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png',
        numero: 11,
        nome: 'Metapod',
        tipos: [
          Tipo.bug,
        ],
      },
      
      {
        foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png',
        numero: 25,
        nome: 'Tipos',
        tipos: [
          Tipo.bug,
          Tipo.dark,
          Tipo.dragon,
          Tipo.electric,
          Tipo.fairy,
          Tipo.fighting,
          Tipo.fire,
          Tipo.flying,
          Tipo.ghost,
          Tipo.grass,
          Tipo.ground,
          Tipo.ice,
          Tipo.normal,
          Tipo.poison,
          Tipo.psychic,
          Tipo.rock,
          Tipo.steel,
          Tipo.water,
        ],
      },
            
    ];

    
    constructor(public bixoService: BixoService,) {}
    
  }
