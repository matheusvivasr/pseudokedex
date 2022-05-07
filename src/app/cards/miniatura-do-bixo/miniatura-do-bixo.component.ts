import { Component, Input } from '@angular/core';
import { Bixo } from 'src/_model/bixo';

@Component({
  selector: 'app-miniatura-do-bixo',
  templateUrl: './miniatura-do-bixo.component.html',
  styleUrls: ['./miniatura-do-bixo.component.css']
})
export class MiniaturaDoBixoComponent {
  @Input()
  public miniatura: string;

  @Input()
  public bixo: Bixo;

}
