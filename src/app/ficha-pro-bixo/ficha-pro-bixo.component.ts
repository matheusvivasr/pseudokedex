import { Component, Input } from '@angular/core';
import { Bixo } from './../../_model/bixo';

@Component({
  selector: 'app-ficha-pro-bixo',
  templateUrl: './ficha-pro-bixo.component.html',
  styleUrls: ['./ficha-pro-bixo.component.css']
})

export class FichaProBixoComponent {
  @Input()
  public bixo: Bixo;

  public leadingZero(str: string | number, size = 3): string {
    let s = String(str);
    while (s.length < (size || 2)) {
      s = '0' + s;
    }
    return s;
  }
}

