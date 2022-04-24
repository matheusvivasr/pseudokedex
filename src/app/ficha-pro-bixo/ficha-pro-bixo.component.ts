import { Component, Input } from '@angular/core';
import { Bixo, fotoDoBixo, numeroDoBixo } from './../../_model/bixo';

@Component({
  selector: 'app-ficha-pro-bixo',
  templateUrl: './ficha-pro-bixo.component.html',
  styleUrls: ['./ficha-pro-bixo.component.css']
})

export class FichaProBixoComponent {
  @Input()
  public bixo: Bixo;

  public fotoDoBixo = fotoDoBixo;
  public numeroDoBixo = numeroDoBixo;
}