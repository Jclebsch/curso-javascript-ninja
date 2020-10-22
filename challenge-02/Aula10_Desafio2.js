// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function soma(a, b) {
    return a + b
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var total = soma(5, 5) + 5

// Qual o valor atualizado dessa variável?
console.log(total)

// Declare uma nova variável, sem valor.
var semValor

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function addValor() {
    semValor = 40
    return console.log(' O valor da variável agora é ' + semValor)
}

// Invoque a função criada acima.

addValor()
// Qual o retorno da função? (Use comentários de bloco).
/* O valor da variável agora é 40 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function somatoria(a, b, c) {
    if (a === undefined || b === undefined || c === undefined) {
        return console.log('Preencha todos os valores corretamente!')
    }
    else {
        var somaTudo = a * b * c
        return somaTudo + 2
    }

}


// Invoque a função criada acima, passando só dois números como argumento.
var aa = somatoria(1, 1)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
console.log(aa)

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
var bb = somatoria(1, 1, 1)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
console.log(bb)

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function novaFunction(x, y, z) {
    if (x !== undefined && y === undefined) {
        return console.log(x)
    } else if (x !== undefined && y !== undefined && z === undefined) {
        return console.log(x + y)

    } else if (x !== undefined && y !== undefined && z !== undefined) {
        var soma = x + y
        var resultado = soma / z
        return console.log(resultado)
    } else if (x === undefined && y === undefined && z === undefined) {
        return console.log(false)
    } else {
        return console.log('Null')
    }

}

/* Invoque a função acima utilizando todas as possibilidades 
(com nenhum argumento, com um, com dois e com três.)
Coloque um comentário de linha ao lado da função com o 
resultado de cada invocação. */

var primeiro = novaFunction(10) // 1
var segundo = novaFunction(10, 5) // 2
var terceiro = novaFunction(10, 5, 3) // 3
var quarto = novaFunction() //false
