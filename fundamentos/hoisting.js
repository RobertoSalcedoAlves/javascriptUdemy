//HOISTING (IÇAMENTO) - o comportamento normal do javascript em LEVAR AO TOPOS as variáveis VAR.
// seja ao topo do escopo global, seja ao todo do escopo da função.

console.log('a = ' + a)
var a = 2
console.log('a = ' + a)


// LET - evita o hoisting, que pode ser considerado um comportamento indesejado
console.log('b = ' + b)
let b = 3
console.log('b = ' + b)

