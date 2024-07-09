/*class carro {
    marca: string
ano : number
cor : string
placa : string
velocidade : number



        constructor ( carroMarca : string , carroAno : number, carroCor : string , carroPlaca : string , carroVelocidade : number){
            this.marca = carroMarca
            this.velocidade = carroVelocidade
            this.ano = 2008
            this.cor = carroCor
            this.placa = carroPlaca
             


        }


}
*/
/*
class carro{

private velocidade : number
getvelocidade(): number{
    return this.velocidade
}
setvelocidade(novaVelocidade : number):void {
    if (this.velocidade > 0)
        this.velocidade = novaVelocidade
} else (){

}

}
carro.setvelocidade (100)
*/
/*
class carro  {
    private velocidade
}
    */ /*class Carro {
  
private velocidade : number
    

constructor(velocidade: number){
    this.velocidade = velocidade

}


getvelocidade():number{
return this.velocidade

}

setvelocidade(velocidade : number):void{
if(this.velocidade > 0)
this.velocidade = velocidade
}else(){
console.log('vocxa nao pode ter velocidade negativa')

}



}
const carro = new Carro  (100)
Carro.getvelocidade (100)
*/
//Se precisar adicionar validação, por exemplo, garantir que velocidade seja positiva, vamos ter que modificar várias partes do código. 
//Se já construirmos as classes desde o início usando getters e setters, mesmo que futuramente adicionemos uma lógica de validação, não vamos precisar alterar nenhum código que usa esta classe.
var Carro = /** @class */ (function () {
    function Carro(velocidade) {
        this.velocidade = velocidade;
    }
    //Mostrar o valor de velocidade
    //getter - pegar / obter / mostrar
    Carro.prototype.getVelocidade = function () {
        return this.velocidade;
    };
    //Setar o valor de velocidade
    //setter  - setar  /  definir  / modificar
    Carro.prototype.setVelocidade = function (novaVelocidade) {
        if (this.velocidade > 0) {
            return this.velocidade = novaVelocidade;
        }
        else {
            return "A velocidade não pode ser 0 ou negativa.";
        }
    };
    return Carro;
}());
var carro = new Carro(100);
console.log(carro.getVelocidade()); //100
carro.setVelocidade(150);
console.log(carro.getVelocidade()); //150
