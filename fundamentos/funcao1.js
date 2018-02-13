//Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // SEM ERRO - tenta somar o número indicado com um "undefined" e retorna NaN
imprimirSoma(2, 3, 4, 5, 6, 7, 8) // SEM ERRO - funciona. Simplesmente ignora o excesso de parâmetros
imprimirSoma() // SEM ERRO - retorna NaN
imprimirSoma('vo', 'vó') // Concatena
imprimirSoma('2', 1) // tenta somar, senão concatena.
imprimirSoma(7, 'estrelo') // Concatena

// Funcao com retorno
function soma(a, b = 1){ //um valor padrão é estabelecido para quando não informado
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma()) // SEM ERRO ! - soma de valor "undefined" - retorna NaN