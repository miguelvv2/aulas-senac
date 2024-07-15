"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eletronico = void 0;
var Eletronico = /** @class */ (function () {
    function Eletronico(tipo, nome, preco) {
        // this.nome = 'fone'
        // this.tipo = 'Eletronico'
        this.preco = 150.00;
    }
    Eletronico.prototype.Eletronicos = function () {
        console.log("O ".concat(this.nome, " de preco ").concat(this.preco, " esta disponivel"));
    };
    return Eletronico;
}());
exports.Eletronico = Eletronico;
