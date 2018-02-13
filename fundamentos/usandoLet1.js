// LET - Respeita o bloco e considera como duas variáveis distintas
// isso acontece porque o LET respeita escopos diferentes

let numero = 1

{
    let numero = 2
    console.log('dentro = ' + numero)
}

console.log('fora = ' + numero)