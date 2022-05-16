// enum Permissoes {
//     admin, 
//     editor,
//     comum
// }

// const usuario = {
//     nivel: Permissoes.admin
// }

// console.log(usuario) //0

//ou entao...
enum Permissoes {
    admin = 'ADMIN', 
    editor = 'EDITOR',
    comum = 'COMUM'
}

//utilizando para paleta de cores padrão do projeto!
enum Cores {
    red = '#ff0000',
    black = '#fff'
}

const usuario = {
    perfil: Cores.red,
    nivel: Permissoes.admin
}

console.log(usuario) // 'ADMIN'



