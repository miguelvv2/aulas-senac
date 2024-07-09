/*class montro {
    nome: string
    vida : number
    forca : number
    raca : string

    constructor ( monNome : string, ){
this.nome = monNome
 this.forca = 5
  this.vida = 50
  this.raca = 'monstro'

 }

atacar (): void {
console.log('montro ataca guerreiro')

 }
}
 class guerreiro {
    nome: string
    vida : number
    forca : number
    raca : string

    constructor ( guerreiro : string, ){
this.nome = guerreiro
 this.forca = 10
  this.vida = 100
  this.raca = 'guerreiro'
    
 }
       










}*/
// Definição da classe Guerreiro
var Guerreiro = /** @class */ (function () {
    function Guerreiro(nome, tipo, forca) {
        this.nome = nome;
        this.tipo = tipo;
        this.forca = forca;
        this.saude = 100;
    }
    Guerreiro.prototype.atacarMonstro = function (monstro) {
        console.log("".concat(this.nome, " ataca ").concat(monstro.nome, "!"));
        monstro.receberDano(this.forca);
    };
    Guerreiro.prototype.receberDano = function (dano) {
        this.saude -= dano;
        console.log("".concat(this.nome, " recebe ").concat(dano, " de dano."));
        if (this.saude <= 0) {
            console.log("".concat(this.nome, " foi derrotado!"));
        }
    };
    Guerreiro.prototype.info = function () {
        console.log("O guerreiro ".concat(this.nome, " do tipo ").concat(this.tipo, " tem ").concat(this.saude, "."));
    };
    return Guerreiro;
}());
var Monstro = /** @class */ (function () {
    function Monstro(nome) {
        this.nome = nome;
        this.forca = 50;
        this.saude = 10;
    }
    Monstro.prototype.atacarGuerreiro = function (guerreiro) {
        console.log("".concat(this.nome, " ataca ").concat(guerreiro.nome, "!"));
        guerreiro.receberDano(this.forca);
    };
    Monstro.prototype.receberDano = function (dano) {
        this.saude -= dano;
        console.log("".concat(this.nome, " recebe ").concat(dano, " de dano."));
        if (this.saude <= 0) {
            console.log("".concat(this.nome, " foi derrotado!"));
        }
    };
    Monstro.prototype.info = function () {
        console.log("O monstro ".concat(this.nome, " tem ").concat(this.saude, " de saude."));
    };
    return Monstro;
}());
var meuGuerreiro = new Guerreiro("Conan", "Bárbaro", 100);
var monstro = new Monstro("Dragão");
meuGuerreiro.atacarMonstro(monstro);
monstro.info();
