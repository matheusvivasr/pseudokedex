import { Component, Input } from '@angular/core';
import { Bixo, numeroDoBixo } from 'src/_model/bixo';

@Component({
  selector: 'app-verso-do-card',
  templateUrl: './verso-do-card.component.html',
  styleUrls: ['./verso-do-card.component.css']
})
export class VersoDoCardComponent {
  @Input()
  public bixo: Bixo;
  public numeroDoBixo = numeroDoBixo;
  
}
