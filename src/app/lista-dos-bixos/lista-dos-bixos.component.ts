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
  constructor(public bixoService: BixoService) {}

  public bixosTeste: Bixo[] = [
    {
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
      fotoB: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
      numero: 3,
      nome: 'Venosaur',
      tipos: [
        Tipo.grass,
        Tipo.poison,
      ],
      vida:88,
      ataque:50,
      defesa:20,
      rapidez:100,
    },
    {
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
      fotoB: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
      numero: 6,
      nome: 'Charizard',
      tipos: [
        Tipo.fire,
        Tipo.flying,
      ],
      vida:88,
      ataque:50,
      defesa:20,
      rapidez:100,
    },
    {
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/062.png',
      fotoB: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/062.png',
      numero: 62,
      nome: 'Poliwrath',
      tipos: [
        Tipo.water,
        Tipo.fighting
      ],
      vida:88,
      ataque:50,
      defesa:20,
      rapidez:100,
    },  
    {
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/132.png',
      fotoB: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/132.png',
      numero: 132,
      nome: 'Tipos',
      tipos: [
        Tipo.dark,
        Tipo.dragon,
        Tipo.ghost,
        Tipo.ice,
      ],
      vida:88,
      ataque:50,
      defesa:20,
      rapidez:100,
    },
    {
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/082.png',
      fotoB: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/082.png',
      numero: 82,
      nome: 'magneton',
      tipos: [
        Tipo.electric,
        Tipo.steel,
      ],
      vida:88,
      ataque:50,
      defesa:20,
      rapidez:100,
    },
    {
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/047.png',
      fotoB: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/047.png',
      numero: 47,
      nome: 'parasect',
      tipos: [
        Tipo.bug,
        Tipo.grass,
      ],
      vida:88,
      ataque:50,
      defesa:20,
      rapidez:100,
    },
    {
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/111.png',
      fotoB: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/111.png',
      numero: 111,
      nome: 'rhyhorn',
      tipos: [
        Tipo.ground,
        Tipo.rock,
      ],
      vida:88,
      ataque:50,
      defesa:20,
      rapidez:100,
    },
    {
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/122.png',
      fotoB: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/122.png',
      numero: 122,
      nome: 'mr-mime',
      tipos: [
        Tipo.psychic,
        Tipo.fairy,
      ],
      vida:88,
      ataque:50,
      defesa:20,
      rapidez:100,
    },
    
  ];
    
  }
