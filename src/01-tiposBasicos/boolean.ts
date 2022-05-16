let estaAtivo: boolean

function mapearStatusDeUsuario(status: boolean) {
    if(status) {
        return 'Usuário está ativo'
    } else {
        return 'Usuário não está ativo'
    }
}

mapearStatusDeUsuario(true)