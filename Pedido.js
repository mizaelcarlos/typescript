"use strict";
//classes, construtores, herança, interfaces
exports.__esModule = true;
exports.Pedido = void 0;
var Pedido = /** @class */ (function () {
    function Pedido(pedido) {
        this.pedido = pedido;
    }
    Pedido.prototype.qualseuPedido = function () {
        console.log("O meu pedido \u00E9 :  " + this.pedido);
    };
    return Pedido;
}());
exports.Pedido = Pedido;
