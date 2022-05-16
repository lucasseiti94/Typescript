//classes e funções
class Usuario {
    //no typescript, é necessário indicar os campos utilizados neste objeto
    public nome;
    public idade;
    constructor(nome: string, idade: number) {
        this.nome = nome
        this.idade = idade
    }
}

class Player extends Usuario {
    public jogo

    constructor(nome: string, idade: number, jogo: string) {
        super(nome, idade)

        this.jogo = jogo
    }

    dizerOJogoAtual() {
        return `Jogador ${this.nome} está jogando no momento: ${this.jogo}`
    }

    //metodos estaticos nao precisam ser instanciados (como o método acima) para serem invocados, podendo ser chamados diretamente pela sua classe
    static queHorasSao() {
        return Date()
    }
}

//quando o método nao é static, deve ser instaciado para ser invocado!
const jogador = new Player('Anna', 24, 'Age os Empires')
console.log(jogador.dizerOJogoAtual())

//utilizando método estático
console.log(Player.queHorasSao())
// console.log(Player.dizerOJogoAtual()) //typescript já aponta o erro!

/////////////////////////////
//private, protected, public
/////////////////////////////
// o tipo public é acessível dentro e fora da classe onde foi criada
// o tipo private é acessível somente dentro da classe onde foi criado
// o tipo protected é acessível somente dentro da classe e subclasse de onde foi criado
class Jogo {
    // public nome
    // private nome
    protected nome

    constructor(nome: string) {
        this.nome = nome
    }

    dizerNome() {
        return `O nome do jogo é ${this.nome}`
    }
}

const ghost = new Jogo('Ghost of Tsushima')
// variavel nome está acessível e pode ser modificado quando declarada como public na linha 44-46
// typescript já indica que a variavel privada nao é acessível
// ghost.nome = 'The Sims'
// console.log(ghost.nome)

console.log(ghost.dizerNome())


// class JogoComDescricao extends Jogo {
//     private descricao

//     constructor(nome: string, descricao: string) {
//         super(nome)
//         this.descricao = descricao
//     }

//     dizerNomeComDescricao() {
//         return `O jogo ${this.nome} ${this.descricao.toLowerCase()}`
//     }
// }

// const ghostDescricao = new JogoComDescricao('Ghost of tsushima', 'É um jogo muito louco')
// console.log(ghostDescricao.dizerNomeComDescricao())

//////////////////////////
//interfaces e implements
//////////////////////////
//exemplo: digamos que desejamos garantir que a variável descricao e método dizerComDescricao existam.

// somente campos publicos são implementáveis
interface IJogoDescricao {
    // nome: string
    descricao: string
    dizerNomeComDescricao(): string
}

class JogoComDescricao extends Jogo implements IJogoDescricao {
    public descricao

    constructor(nome: string, descricao: string) {
        super(nome)
        this.descricao = descricao
    }

    dizerNomeComDescricao() {
        return `O jogo ${this.nome} ${this.descricao.toLowerCase()}`
    }
}


