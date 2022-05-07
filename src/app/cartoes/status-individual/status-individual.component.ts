import { Component, Input } from '@angular/core';
import { Bixo } from 'src/_model/bixo';

@Component({
  selector: 'app-status-individual',
  templateUrl: './status-individual.component.html',
  styleUrls: ['./status-individual.component.css']
})
export class StatusIndividualComponent {

  @Input()
  public valor: string;

  @Input()
  public caracteristica: string;


}
