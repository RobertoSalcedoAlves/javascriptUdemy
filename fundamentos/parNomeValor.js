// Par Nome/Valor - CONTEXTO LÉXICO

    const saudacao = 'olá!' // contexto léxico 1

    function exec (){
        const saudacao = 'tudo bem??' // contexto léxico 2
        return saudacao
    }

    //Objetos são grupos anihados de pares chaves/valor
    const Estudante = {
        nome: 'Roberto',
        sobrenome: 'Salcedo Alves',
        idade: 37,
        peso: 80,
        endereco: {
            rua: 'Das Camélias',
            numero: 777,
            bairro: 'jardim paraíso',
            cidade: 'florianópolis'
        }
    }

    console.log(saudacao)
    console.log(exec())
    console.log(Estudante.nome)