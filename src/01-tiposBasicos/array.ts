const gatos: string[] = [
    'lora',
    'logan',
    'lebleu'
]

// gatos.push(5) //string não é atribuível a tipo numérico!

function exibirGatos(gatos: string[]) {
    return `Os gatos são: ${gatos.join(', ')}`
}

console.log(exibirGatos(gatos))
