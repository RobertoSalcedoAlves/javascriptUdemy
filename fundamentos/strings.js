const escola = "cod3r"
console.log(escola.charAt(4))// índice começa em zero
console.log(escola.charAt(5))// não gera erro, apesar de não haver o índice 5, MAS PULA UMA LINHA NA TELA
console.log(escola.charCodeAt(2))// retorna o valor na tabela ASCII do índice indicado
console.log(escola.indexOf('d'))// retorna o índice do caracter

console.log(escola.substring(1))//retorna um string a partir do índice indicado
console.log(escola.substring(0, 3))//sobrecarga - índice inicial + o tamanho da substring

console.log('Escola '.concat(escola).concat('!'))// concatena literais com literais ou váriáveis
console.log('Escola ' + escola + '!')// concatena com facilidade, cuidado com números
console.log('3' + 2)// concatena. NÃO SOMA, pois o operador '+' é conhecido pelas funções string
console.log(escola.replace(3, 'e'))//susbtitui o dígito indicado pelo literal indicado. funciona apenas para dígitos, NÃO CARACTERS

console.log('Ana,Maria,Pedro'.split(','))//gera um array com elementos que estão separados pelo caracter indicado


