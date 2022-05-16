type User = {
    name: string,
    lastName: string,
    dateOfBirth: string,
    age?: number //opcional
}

const gabriel: User = {
    name: 'Gabriel',
    lastName: 'Ramos',
    dateOfBirth: '29/01/1996'
}



// union types
// | (como se fosse o ||)

type LogLevel = 'info' | 'error' | 'debug'

function logMessage(message: string, level: LogLevel) {
    console.log(`[${level}] - ${message}`)
}

logMessage('Uma mensagem info', 'error')
logMessage('Uma mensagem info', 'info')
logMessage('Uma mensagem info', 'debug')
// logMessage('Uma mensagem info', 'erro') //aponta erro

//intersection types: &

type About = {
    bio: string,
    interests: string[]
}

type Profile = User & About

const userWithProfile: Profile = {
    name:'gabriel',
    lastName: 'ramos',
    dateOfBirth:'29/01/1996',
    bio: 'Ola, meu nome é gabriel',
    interests: ['gatos', 'musica', 'fotografia']
}

type ComposedProfile = User & {
    log: LogLevel
}

const userComposedProfile: ComposedProfile = {
    name: 'Gabriel',
    lastName: 'Ramos',
    dateOfBirth: '29/01/1996',
    log: 'error'
}