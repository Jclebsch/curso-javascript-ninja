/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy

function testaValor(a) {
    isTruthy = a
    console.log(isTruthy ? true : false)

}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
testaValor(0)
testaValor('')
testaValor("")
testaValor(null)
testaValor(NaN)
testaValor(-0)

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
testaValor(1)
testaValor(3 + 5)
testaValor('10')
testaValor({})
testaValor([])
testaValor(101)
testaValor({ a: 5, b: 6 })
testaValor([1, 2, 3])
testaValor(function () { })
testaValor(9)


/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = { marca: 'subaru', modelo: 'Forest', placa: 'aaa 1210', ano: 2015, cor: 'Azul', quantasPortas: 4, assento: 5, quantidadePessoas: 0 }

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
function mudaCor(a) {
    carro.cor = a
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
function obterCor() {
    console.log(carro.cor)
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
function obterModelo() {
    console.log(carro.modelo)
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
function obterMarca() {
    console.log(carro.marca)
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
function obterMarcaModelo() {
    console.log('Esse carro é um ' + carro.marca + ' ' + carro.modelo)
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

// carro.addPessoas = function (numeroPessoas) {
//     var totalPessoas = carro.quantidadePessoas + numeroPessoas
//     if (carro.quantidadePessoas === carro.assentos && totalPessoas >= carro.assentos) {
//         return console.log('O carro já está lotado!')
//     }
//     if (totalPessoas > carro.assentos) {
//         var quantasPessoasCabem = carro.assentos - carro.quantidadePessoas
//         var pluralOuSingular = quantasPessoasCabem === 1 ? ' pessoa' : ' pessoas'
//         return console.log('Só cabem mais ' + quantasPessoasCabem + pluralOuSingular + '!')
//     }
//     carro.quantidadePessoas += numeroPessoas
//     return console.log('Já temos ' + carro.quantidadePessoas + ' pessoas no carro!')
// };

carro.addPessoas = function (a) {

    carro.quantidadePessoas += a
    var total = carro.quantidadePessoas

    var SingularOuPlural = total === 1 ? ' pessoa' : ' pessoas'

    console.log(carro.quantidadePessoas >= 1 ? 'Já temos ' + carro.quantidadePessoas + SingularOuPlural + ' no carro!' : 'Não a ninguem no carro')

    var assentos = carro.assento - total

    if (total <= carro.assento) {

        console.log(assentos === 1 ? 'Só cabem mais ' + assentos + ' pessoa' : 'Só cabem mais ' + assentos + ' pessoas')
    } else {
        console.log('O carro já está lotado! ' + 'Não tem lugar para ' + Math.abs(assentos) + ' Pessoas')
    }

}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
obterCor()

// Mude a cor do carro para vermelho.
mudaCor('vermelho')

// E agora, qual a cor do carro?
obterCor()

// Mude a cor do carro para verde musgo.
mudaCor('verde musgo')

// E agora, qual a cor do carro?
obterCor()
// Qual a marca e modelo do carro?
obterMarcaModelo()

// Adicione 2 pessoas no carro.
carro.addPessoas(2)

// Adicione mais 4 pessoas no carro.
carro.addPessoas(2)

// Faça o carro encher.
carro.addPessoas(1)

// Tire 4 pessoas do carro.
carro.addPessoas(-4)

// Adicione 10 pessoas no carro.
carro.addPessoas(10)

// Quantas pessoas temos no carro?
carro.addPessoas(-11)

carro.addPessoas(6)
