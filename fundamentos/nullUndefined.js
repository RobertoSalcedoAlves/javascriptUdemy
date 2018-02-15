let valor // não inicializada
console.log(valor)// foi declarada, mas não inicializada. Vai resultar em "undefined"

valor = null // ausência de valor
console.log(valor) // retorna "null"
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco) // Undefined
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)
