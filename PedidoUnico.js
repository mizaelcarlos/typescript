"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.PedidoUnico = void 0;
var Pedido_1 = require("./Pedido");
var PedidoUnico = /** @class */ (function (_super) {
    __extends(PedidoUnico, _super);
    function PedidoUnico() {
        var _this = _super.call(this, '2 pastéis e 1 guarná de 1 litro') || this;
        _this.valor = 15;
        return _this;
    }
    return PedidoUnico;
}(Pedido_1.Pedido));
exports.PedidoUnico = PedidoUnico;
