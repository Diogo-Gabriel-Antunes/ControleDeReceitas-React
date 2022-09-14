export interface IResumo {
  despesasDoMes: Number
  receitasDoMes: Number
  saldoFinalDoMes: Number
  listaCategorias: Array<{
    categoria: string
    valor: Number
  }>
}