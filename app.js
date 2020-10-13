"use strict";
exports.__esModule = true;
var Pedido_1 = require("./Pedido");
var _ = require("lodash");
console.log(_.pad("Typescript Examples", 40, "="));
var pedido1 = new Pedido_1.Pedido('2 pastéis e 1 guarná de 1 litro');
pedido1.qualseuPedido();
