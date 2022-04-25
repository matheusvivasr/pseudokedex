import { Bixo } from './../_model/bixo';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroBuscador'
})
export class FiltroBuscadorPipe implements PipeTransform {

  transform(bixos: Bixo[], bixoProcurado: string): Bixo[] {

    if (!bixos) {
      return [];
    }
    if (!bixoProcurado) {
      return bixos;
    }
    bixoProcurado = bixoProcurado.toLocaleLowerCase();

    return bixos.filter(it => {
      return it.nome.toLocaleLowerCase().includes(bixoProcurado);
    });
  }

}
