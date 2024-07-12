import { Produtos } from "./Produtos"


export class Moveis implements Produtos {
    tipo: string;
    nome: string;
    preco: number;
    
    
    constructor (tipo: string, nome : string , preco : number ){
        this.nome = 'Mesa'
        this.tipo = 'movel'
        this.preco = 650.00
    
    }
    mostrarPrecos(): void {
    }
}