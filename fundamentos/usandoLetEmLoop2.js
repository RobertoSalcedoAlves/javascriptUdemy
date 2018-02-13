// LET - imprime corretamente o resultado, pois LET RESPEITA ESCOPO DE BLOCO.

const func = []

for(let i = 0; i < 10; i++){
    func.push(function(){
        console.log(i)
    })
}

func[2] ()
func[8] ()