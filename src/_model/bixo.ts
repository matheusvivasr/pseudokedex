import { Tipo } from './tipo'
export interface Bixo {
    foto:string;
    numero: number;
    nome: string;
    tipos: Tipo[]; 
}