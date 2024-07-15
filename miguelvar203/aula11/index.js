"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Eletronico_1 = require("./Eletronico");
var musicas_1 = require("./musicas");
var listaDecompras = [];
while ( !== 4) {
    switch (listaDecompras) {
        case 1:
            Eletronico_1.Eletronico;
        case 2:
            musicas_1.Musicas;
            break;
        case 4:
            console.log('Programa');
        default:
            console.log('Opcao nao encontrada!');
            break;
    }
    console.log("".concat(listaDecompras));
    console.log(' MENU');
    console.log('1.ELETRONICO');
    console.log('2.MUSICAS');
    console.log('3.LIVROS');
    console.log('4.SAIR');
}
