const valores = [7.7, 8.9, 6.3, 9.2] // declaração de um array de forma literal
console.log('Tamanho atual do array:' + valores.length)
console.log(valores[0], valores[3])
console.log(valores[100]) // quando um índice que não existe NÃO GERA ERRO - valor "undefined"

valores[4] = 10 // o array não tem tamanho fixo, pode aumentar ou diminuir conforme a necessidade
console.log(valores)
console.log('Tamanho atual do array:' + valores.length) // identificar o tamanho do array

valores.push({id: 3}, false, null, 'teste') // acrescenta novos valores ao array. Observe a tipagem fraca, onde são aceitos valores de tipos deversos no mesmo array
console.log('Tamanho atual do array:' + valores.length)
console.log(valores)

console.log(valores.pop()) // essa remove e retorna o último elemento do array
console.log('Tamanho atual do array:' + valores.length)
delete valores[0] // esse recurso permite excluir o conteúdo de um índice específico no array, mas o array continua do mesmo tamanho
console.log('Tamanho atual do array:' + valores.length)
console.log(valores)

console.log(typeof valores) // o tipo de um array em javascript é Object