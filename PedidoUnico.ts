import {Pedido,PedidoInferiorAVinte} from './Pedido'
class PedidoUnico extends Pedido implements PedidoInferiorAVinte{

    valor: number
    constructor(){
    
        super('2 pastéis e 1 guarná de 1 litro')
        this.valor = 15
    }
    
    }

    export{PedidoUnico}