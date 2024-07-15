"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Musicas = void 0;
var Musicas = /** @class */ (function () {
    function Musicas(tipo, nome, preco) {
        this.nome = 'Palaye royale';
        this.tipo = 'musica';
        this.preco = 10.00;
    }
    Musicas.prototype.mostrarPrecos = function () {
        console.log("O ".concat(this.nome, " de preco ").concat(this.preco, " esta disponivel"));
    };
    return Musicas;
}());
exports.Musicas = Musicas;
