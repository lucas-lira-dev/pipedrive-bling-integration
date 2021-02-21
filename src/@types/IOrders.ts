export interface IBlingOrdersResponse {
  retorno: Retorno;
}

export interface Retorno {
  pedidos: PedidoElement[];
}

export interface PedidoElement {
  pedido: PedidoPedido;
}

export interface PedidoPedido {
  desconto: string;
  observacoes: string;
  observacaointerna: string;
  data: string;
  numero: string;
  numeroOrdemCompra: string;
  vendedor: string;
  valorfrete: string;
  totalprodutos: string;
  totalvenda: string;
  situacao: string;
  tipoIntegracao: string;
  cliente: { [key: string]: null | string };
  itens: Iten[];
  parcelas: ParcelaElement[];
}

export interface Iten {
  item: { [key: string]: null | string };
}

export interface ParcelaElement {
  parcela: ParcelaParcela;
}

export interface ParcelaParcela {
  idLancamento: string;
  valor: string;
  dataVencimento: string;
  obs: string;
  destino: number | string;
  forma_pagamento: FormaPagamento;
}

export interface FormaPagamento {
  id: string;
  descricao: string;
  codigoFiscal: string;
}

export interface IBlingOrdersResponseError {
  retorno: Retorno;
}

export interface Retorno {
  erros: ErroElement[];
}

export interface ErroElement {
  erro: ErroErro;
}

export interface ErroErro {
  cod: number;
  msg: string;
}
