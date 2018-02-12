isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3) // a dupla negação força uma conversão rápida para booleano, possibilitando o teste.
console.log(!!-1) // todos os números inteiros, exceto o zero, são considerados verdadeiros.
console.log(!!' ') // espaços em branco são verdadeiros
console.log(!!'texto') // qualquer string não vazio é verdadeiro
console.log(!![]) // qualquer array, ainda que vazio, é verdadeiro
console.log(!!{}) // qualquer objeto é verdadeiro
console.log(!!Infinity) // o resultado de uma divisão por zero também é considerado verdadeiro
console.log(!!(isAtivo = true)) // a atribuição é testada e, no caso, é verdadeira
console.log(!!(isAtivo = 1)) // como a atribuição é inteiro e diferente de zero, é considerada verdadeiro.

console.log('os falsos...')
console.log(!!0) //o zero é considerado falso
console.log(!!'') // string vazio é considerado falso
console.log(!!null) //qualquer nulo é falso
console.log(!!NaN) // Not a Number - valores não numéricos - esse resultado é considerado falso
console.log(!!undefined) // valores indefinidos são considerados falsos
console.log(!!(isAtivo = false)) // não testa se a operação de certo, apneas analisa o valor atribuído
console.log(!!(isAtivo = 0)) // o valor da atribuição e considerado falso

console.log('pra finalizar...')
console.log('' || null || 0 || NaN || ' ') // testa se alguma dos elementos é considerado true.
console.log('' || null || 0 || NaN || 'teste') // apresenta elemento true testado.
console.log('' || null || 0 || NaN || 123 || 'teste') // apresenta somente o primeiro elemento true testado.

let nome = ''
console.log(nome || 'Desconhecido')

nome = 'Roberto'
console.log(nome || 'Vazio')
