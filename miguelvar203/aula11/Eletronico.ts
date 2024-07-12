import { Produtos } from "./Produtos"


export class Eletronico implements Produtos {
    tipo: string;
    nome: string;
    preco: number;
    
    
    constructor (tipo: string, nome : string , preco : number ){
        this.nome = 'fone'
        this.tipo = 'eletronico'
        this.preco = 150.00
    
    }
    mostrarPrecos(): void {
        console.log(`O ${this.nome} de preco ${this.preco} esta disponivel`)
    }
    
}
