import { Produtos } from "./Produtos"
export interface MétodosDePagamento {
    tipo : string
    nome : string
    preco : number
    

    pagar (): void

}
