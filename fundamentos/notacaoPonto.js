console.log(Math.ceil(6.1)) // arredonda para cima
console.log(Math.floor(6.9)) // arredonda para cima

const obj1 = {}
obj1.nome = 'Bola'
obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function qualquer(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Exec...')
    }
}

const qualquer2 = new qualquer('Cadeira')
const qualquer3 = new qualquer('mesa')

console.log(qualquer2.nome)
console.log(qualquer3.nome)
qualquer2.exec()
