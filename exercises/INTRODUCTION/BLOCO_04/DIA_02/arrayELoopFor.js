let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 Nesse primeiro exercício, percorra o array imprimindo
// todos os valores nele contidos com a função console.log() ;

for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}

// 2 Para o segundo exercício, some todos os valores contidos
// no array e imprima o resultado;

let sum = 0;

for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
}

console.log(sum);

// 3 Para o terceiro exercício, calcule e imprima a média 
// aritmética dos valores contidos no array;

let average = 0;

average = sum / numbers.length;

console.log(average);

// 4 Com o mesmo código do exercício anterior, caso o valor 
// final seja maior que 20, imprima a mensagem: "valor maior
// que 20". Caso não seja, imprima a mensagem: "valor menor 
// ou igual a 20";

if (average > 20) {
    console.log("Valor maior que 20!");
} else {
    console.log("Valor menor ou igual a 20!");
}

// 5 Utilizando for , descubra qual o maior valor contido no
// array e imprima-o;

let bigger = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > bigger) bigger = numbers[i];
}

console.log(bigger);

// 6 Descubra quantos valores ímpares existem no array e imprima 
// o resultado. Caso não exista nenhum, imprima a mensagem:
// "nenhum valor ímpar encontrado";

let odds = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 != 0) odds += 1;
}

if (odds > 0) {
    console.log(`Foram encontrados ${odds} números ímpares.`);
} else {
    console.log('Nenhum valor ímpar encontrado.');
}

// 7 Utilizando for , descubra qual o menor valor contido no
// array e imprima-o;

let smaller = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < smaller) smaller = numbers[i];
}

console.log(smaller);

// 8 Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let newArray = [];
let start = 1;
let end = 25;

for (let i = start; i <= end; i += 1) {
    newArray.push(i);
}

console.log(newArray);

// 9 Utilizando o array criado no exercício anterior imprima o 
// resultado da divisão de cada um dos elementos por 2 .

for (let i = 0; i < newArray.length; i += 1) {
    let division = newArray[i] / 2;
    console.log(division);
}