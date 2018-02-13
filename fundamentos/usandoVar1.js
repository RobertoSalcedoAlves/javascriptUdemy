// VAR - escopo global e escopo de função

{
    {
        {
            {
                var sera = 'será???'
                console.log(sera)
            }
        }
    }
}
console.log(sera) // imprime também fora do bloco

function teste () {
    var local = 123
}
teste()
//console.log(local) // ERRO - a variável não está disponível fora do escopo da função

// O ideal é não criar variáveis globais para fugir de problemas de sobrescrita
// A vantagem é o acesso completo da variável, mas o risco é grande
