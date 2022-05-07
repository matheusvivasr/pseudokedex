import { Component, Input } from '@angular/core';
import { Bixo, fotoDoBixo, numeroDoBixo } from 'src/_model/bixo';

@Component({
  selector: 'app-frente-do-card',
  templateUrl: './frente-do-card.component.html',
  styleUrls: ['./frente-do-card.component.css']
})
export class FrenteDoCardComponent {

  @Input()
  public bixo: Bixo;

  public fotoDoBixo = fotoDoBixo;
  public numeroDoBixo = numeroDoBixo;
}
