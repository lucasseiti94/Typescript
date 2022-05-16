
//o tipo void é definido quando a funcao não possui um retorno explicito
function principal(): void {
    console.log('executando')
}

principal()

// o never é especificamente para laços infinitos ou funções que retornam erros
function funcaoQueNuncaRetorna(): never {
    throw new Error('ola')
    while(true) {}
}

const a = funcaoQueNuncaRetorna()
