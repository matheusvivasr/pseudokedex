import { Component, Input } from '@angular/core';
import { Bixo } from 'src/_model/bixo';

@Component({
  selector: 'app-tipos-do-bixo',
  templateUrl: './tipos-do-bixo.component.html',
  styleUrls: ['./tipos-do-bixo.component.css']
})
export class TiposDoBixoComponent {
  @Input()
  public bixo: Bixo;


}
