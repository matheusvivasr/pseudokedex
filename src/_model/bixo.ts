import { Tipo } from './tipo'
export interface Bixo {
    foto:string;
    numero: number;
    nome: string;
    tipos: Tipo[]; 
}

export function fotoDoBixo(bixo: Bixo): string {
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroDoBixo(bixo)}.png`;
}

export function numeroDoBixo(bixo: Bixo): string {
    return leadingZero(bixo.numero);
}   

function leadingZero(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
        s = '0' + s;
    }

    return s;
}