//declarações
var message = "Meu primeiro contato com angular";
var aula = 4;
var statuss = true;
var escola = "Unidade Escolar Estado de São Paulo";
//saídas
console.log(message);
console.log("Aula de número :" + aula);
console.log("Minha escola do ensino médio foi: " + escola);
//Funções
var somar = function (numero1, numero2) {
    return numero1 + numero2;
};
function somando(numero1, numero2) {
    return numero1 + numero2;
}
//funções com parametros státicos
function mutiplicandoPorDois(numero1, numero2) {
    if (numero2 === void 0) { numero2 = 2; }
    return numero1 * numero2;
}
console.log(somando(3, 2));
console.log(mutiplicandoPorDois(4));
var ValorMaior = function (valor1, valor2) {
    if (valor1 > valor2) {
        return true;
    }
    else {
        return false;
    }
};
var numero1 = 14;
var numero2 = 15;
//template string usando o acento da crase, usando expressões com ${}
console.log("Valor " + numero1 + " \u00E9 maior? " + (ValorMaior(numero1, numero2) ? 'SIM' : 'NÃO') + " ");
//
var numeroPedido = function (numero) { return console.log("Qual o numero do pedido: " + numero); };
numeroPedido(5);
//parametros padões
