// VAR - imprime sempre o mesmo resultado, pois VAR NÃO RESPEITA ESCOPO DE BLOCO, nem mesmo estando dentro da função

const func = []

for(var i = 0; i < 10; i++){
    func.push(function(){
        console.log(i)
    })
}

func[2] ()
func[8] ()