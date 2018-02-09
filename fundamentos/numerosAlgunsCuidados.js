console.log(7 / 0)// DIVISÃO POR ZERO - infinito - não gera erro
console.log("10.1" / 2)// Incrivelmente Funciona, mas não pode haver vírgula. Ponto sim.
//console.log("show!" * 2)// não funciona nesta linguagem
console.log(0.1 + 0.7)// não é 100% preciso
//console.log(10.toString())//não funciona
console.log((10).toString())// funciona porque o literal está dentro de parênteses
console.log((10.345).toFixed(2))// funciona perfeitamente

console.log('3' + 2)// concatena. NÃO SOMA, pois o operador '+' é conhecido pelas funções string
console.log('3' - 2)// TENTA RESOLVER, pois o operador '-' NÃO é conhecido pelas funções string
