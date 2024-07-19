import { Produtos } from "./Produtos"


export class comida implements Produtos {
    tipo: string
    nome: string
    preco: number
    
    
    constructor (tipo: string, nome : string , preco : number ){
        this.nome = 'chocolate'
        this.tipo = 'comida'
        this.preco = 15.00
       
        }
 mostrarPrecos()
    }