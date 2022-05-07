import { Component } from '@angular/core';
import { BixoService } from 'src/_services/bixo.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {  
  
  constructor(private bixoService: BixoService){}

  buscaService(bixoBuscado:string){
    this.bixoService.buscaBixos(bixoBuscado);
    
  }
  
}
