/* Métodos = função como valor */

// Declarar uma variável qualquer, que receba um objeto vazio.
let obj = {}

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
let pessoa = { nome: 'Helena', sobrenome: 'Souza', sexo: 'F', idade: 18, altura: 1.81, peso: 60, andando: false, caminhouQuantosMetros: 0 }

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
pessoa.aniver = function () {
    pessoa.idade++;
}

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
pessoa.andar = function (a) {
    pessoa.andando = true
    pessoa.caminhouQuantosMetros = a
}
pessoa.andar()
console.log(pessoa)
/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
pessoa.parar = function () {
    pessoa.andando = false
}

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
nomeCompleto = function () {
    nomeComp = pessoa.nome + ' ' + pessoa.sobrenome
    console.log('Olá! Meu nome é ' + nomeComp)
}



/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
mostrarIdade = function () {
    console.log('Olá, eu tenho ' + pessoa.idade + ' anos!')
}

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
mostrarPeso = function () {
    console.log('Eu tenho ' + pessoa.peso + 'Kg')
}

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
mostrarAltura = function () {
    console.log('Minha altura é ' + pessoa.altura + 'm')
}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

nomeCompleto()
/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
mostrarIdade()

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
mostrarPeso()

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
mostrarAltura()

/*
Faça a `pessoa` fazer 3 aniversários.
*/
pessoa.aniver()
pessoa.aniver()
pessoa.aniver()
/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
mostrarIdade()

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
pessoa.andar(500)
pessoa.andar(200)
pessoa.andar(300)

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log('A pessoa está andando ? ' + pessoa.andando)

/*
Se a pessoa ainda está andando, faça-a parar.
*/
pessoa.parar()

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log('A pessoa está andando ? ' + pessoa.andando)

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log('A pessoa ando quantos metros ? ' + pessoa.caminhouQuantosMetros)

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
//pessoa.sexo = 'M'
//pessoa.idade = 1
//pessoa.caminhouQuantosMetros = 1

apresentacao = function () {
    comecaFrase = 'Eu sou o'
    fraseAno = 'anos'
    metro = 'metros'

    if (pessoa.sexo === 'F') {
        comecaFrase = 'Eu sou a'
    }
    if (pessoa.idade === 1) {
        fraseAno = 'ano'
    }
    if (pessoa.caminhouQuantosMetros === 1) {
        metro = 'metro'
    }
    return console.log(comecaFrase + ' ' + nomeComp + ' tenho ' + pessoa.idade +
        ' ' + fraseAno + '. Meu peso é ' + pessoa.peso + 'Kg ' + 'e, só hoje, eu já caminhei ' +
        pessoa.caminhouQuantosMetros + ' ' + metro)
}

// Agora, apresente-se ;)
apresentacao()