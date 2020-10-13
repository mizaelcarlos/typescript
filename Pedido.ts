//classes, construtores, herança, interfaces

class Pedido{


    constructor (public pedido : string){}

    qualseuPedido(){

        console.log(`O meu pedido é :  ${this.pedido}`)
    }
}

interface PedidoInferiorAVinte{

    valor : number
}

export {Pedido,PedidoInferiorAVinte}