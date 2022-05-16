let pessoa: object = {
    nome: 'lucas',
    sobrenome: 'hamaguchi',


}

//mais comumente validado com um "type alias"
type Pessoa = {
    nome: string,
    sobrenome: string
}

let pessoa2: Pessoa = {
    nome: 'francisco',
    sobrenome: 'ferdinando'
}