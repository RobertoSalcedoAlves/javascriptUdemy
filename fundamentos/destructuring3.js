// DESTRUCTURING - desestruturando
// novo recurso do ES2015
// DESESTRURAÇÃO COM 

function rand({ min = 0, max = 100}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log({min: 25, max: 30})

const obj = {max: 100, min: 90}
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({}))
///console.log(rand()) // aqui gera erro, pois não foi passado OBJETO para desestruturar
