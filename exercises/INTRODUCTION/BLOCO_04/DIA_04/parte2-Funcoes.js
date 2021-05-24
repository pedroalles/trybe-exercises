// 1 Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

let palavra = 'arara';

function verificaPalindrome(word) {
    for (key in word) {
        if (key < (word.length / 2)) {
            if (word[key] != word[word.length - 1 - key]) {
                return false;
            }
        }
    }
    return true;
}

console.log(verificaPalindrome(palavra));
console.log(verificaPalindrome('desenvolvimento'));
console.log('-----------------------------------------------');

// 2 Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let arrayDeTeste = [2, 3, 6, 7, 10, 1];

function retornaMaiorIndice(arrayEntrada) {

    let indiceMaiorValor = 0;
    let maiorValor = arrayEntrada[indiceMaiorValor];

    for (key in arrayEntrada) {
        if (arrayEntrada[key] > maiorValor) {
            indiceMaiorValor = key;
            maiorValor = arrayEntrada[key];
        }
    }
    return indiceMaiorValor;
}

console.log(retornaMaiorIndice(arrayDeTeste));
console.log('-----------------------------------------------');

// 3 Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

arrayDeTeste = [2, 4, 6, 7, 10, 0, -3];

function retornaMenorIndice(arrayEntrada) {

    let indiceMenorValor = 0;
    let menorValor = arrayEntrada[indiceMenorValor];

    for (key in arrayEntrada) {
        if (arrayEntrada[key] < menorValor) {
            indiceMenorValor = key;
            menorValor = arrayEntrada[key];
        }
    }
    return indiceMenorValor;
}

console.log(retornaMenorIndice(arrayDeTeste));
console.log('-----------------------------------------------');

// 4 Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

arrayDeTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function retornaMaiorNome(arrayEntrada) {

    let indiceMaiorNome = 0;
    let maiorNome = arrayEntrada[indiceMaiorNome];

    for (key in arrayEntrada) {
        if (arrayEntrada[key].length > maiorNome.length) {
            indiceMaiorNome = key;
            maiorNome = arrayEntrada[key];
        }
    }
    return maiorNome;
}

console.log(retornaMaiorNome(arrayDeTeste));
console.log('-----------------------------------------------');

// 5 Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

arrayDeTeste = [2, 3, 2, 5, 8, 2, 3];

function retornaMaiorOcorrencia(arrayEntrada) {

    let somatorios = {};

    for (let i = 0; i < arrayEntrada.length; i += 1) {

        let num = arrayEntrada[i];

        if (somatorios[num]) {
            somatorios[num] += 1;
        } else {
            somatorios[num] = 1;
        }
    }

    let maior = 0;

    for (key in somatorios) {
        if (somatorios[key] > maior) maior = key;
    }

    return maior;
}

console.log(retornaMaiorOcorrencia(arrayDeTeste));
