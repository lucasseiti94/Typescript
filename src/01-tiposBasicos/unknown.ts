let informacoes: unknown
let informacoesCompletas: string

//o tipo unknown permite que a variavel seja atribuida a qualquer tipo
informacoes = 'lucas'
 
// o unknown mantém a tipagem desconhecida, funcionando de forma diferente do any. O any não é indicado para uso pois acaba "favorecendo" a tipagem fraca, indo em desencontro ao que o typescript propoe. 
// informacoesCompletas = informacoes