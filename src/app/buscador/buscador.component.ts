import { Component, Input} from '@angular/core';
import { Bixo } from 'src/_model/bixo';
import { BixoService } from 'src/_services/bixo.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  @Input()
  public bixo: Bixo[] = [];

  public bixoBuscado:string;

  constructor(
    public bixoService: BixoService
    ) {}

}
