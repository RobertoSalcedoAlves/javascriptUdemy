// CLASSES E OBJETOS SÃO DO TIPO FUNÇÕES
// Instancias de objetos ou funções são do tipo objetos

console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto{} // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto)
