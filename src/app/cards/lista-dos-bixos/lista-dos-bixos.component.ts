import { BixoService } from '../../../_services/bixo.service';
import { Bixo } from '../../../_model/bixo';
import { Tipo } from '../../../_model/tipo';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-dos-bixos',
  templateUrl: './lista-dos-bixos.component.html',
  styleUrls: ['./lista-dos-bixos.component.css']
})
export class ListaDosBixosComponent {
  
  constructor(public listaCompleta: BixoService) {}
  
  public bixosTeste: Bixo[] = [
    {
      foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
      fotoB: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png',
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
      foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
      fotoB: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png',
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
      foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png',
      fotoB: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/62.png',
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
      foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
      fotoB: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png',
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
      foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png',
      fotoB: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/82.png',
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
      foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png',
      fotoB: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/47.png',
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
      foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png',
      fotoB: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/111.png',
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
      foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png',
      fotoB: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/122.png',
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
