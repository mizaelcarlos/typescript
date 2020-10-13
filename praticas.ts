//declarações

let message: string = "Meu primeiro contato com angular"
let aula: number = 4
let statuss: boolean = true
let escola: string = "Unidade Escolar Estado de São Paulo"

//saídas
console.log(message);
console.log("Aula de número :" + aula)
console.log("Minha escola do ensino médio foi: " + escola)


//Funções
let somar = function(numero1:number, numero2:number):number{

    return numero1 + numero2;
}

function somando (numero1: number, numero2: number):number{

    return numero1 + numero2;
}

//funções com parametros státicos
function mutiplicandoPorDois (numero1: number, numero2: number = 2) :number{

    return numero1 * numero2
}

console.log(somando(3,2))
console.log(mutiplicandoPorDois(4))

let ValorMaior = function (valor1: number, valor2: number): boolean{

    if(valor1 > valor2){

        return true
    }
    else{

        return false
    }
}

let numero1 = 14
let numero2 = 15

//template string usando o acento da crase, usando expressões com ${}
console.log(`Valor ${numero1} é maior? ${ValorMaior(numero1,numero2)? 'SIM': 'NÃO'} `)


//
let numeroPedido = (numero: number) => console.log(`Qual o numero do pedido: ${numero}`)

numeroPedido(5)


//parametros padões




