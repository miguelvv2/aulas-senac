import { Produtos } from "./Produtos"


export class Musicas implements Produtos {
    tipo: string;
    nome: string;
    preco: number;
    
    
    constructor (tipo: string, nome : string , preco : number ){
        this.nome = 'Palaye royale'
        this.tipo = 'musica'
        this.preco = 10.00
    
    }
    mostrarPrecos(): void {
        console.log(`O ${this.nome} de preco ${this.preco} esta disponivel`)
    
    }
    
}