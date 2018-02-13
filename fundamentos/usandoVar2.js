// VAR - O bloco não é respeitado sendo impresso na tela apenas a última atribuição

var numero = 1

{
    var numero = 2
    console.log('dentro = ' + numero)
}
console.log('fora = ' + numero) 


