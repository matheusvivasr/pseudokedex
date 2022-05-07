import { Component, Input } from '@angular/core';
import { Bixo } from 'src/_model/bixo';

@Component({
  selector: 'app-caixa-de-status',
  templateUrl: './caixa-de-status.component.html',
  styleUrls: ['./caixa-de-status.component.css']
})
export class CaixaDeStatusComponent {

  @Input()
  public bixo: Bixo;

 
}
