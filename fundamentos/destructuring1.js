// DESTRUCTURING - desestruturando
// novo recurso do ES2015
// DESESTRURAÇÃO COM OBJETO

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa // pega em apenas uma linha os atributos de da estrutura OBJETO Pessoa e cria novas variáveis com eles.
console.log(nome, idade)

const { nome: n, idade: i} = pessoa // é possivel atribuir outros nomes para as novas variáveis.
console.log(n, i)

const { sobrenome, bemHumorada = true} // se um atributo de tipo primitivo não existente for chamado, este pode ter um valor padrão, ou retornará "Undefined".
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa
consolelog(logradouro, numero, cep)

//const {conta:{ag, titular, numero}} = pessoa // o atributo 'conta' não existe e é uma estrutura de dados, ou seja isso gera ERRO!
//console.log(ag, titular, numero) //