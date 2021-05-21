// 1 Para o primeiro exercício de hoje, faça um programa que, dado um 
// valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de 
// asteriscos de lado de tamanho n .

let n = 4;
let line = '';
let character = '*';

for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
        line += character;
    }
    console.log(line);
    line = '';
}

console.log('');

// 2 Para o segundo exercício, faça o mesmo que antes, mas que imprima um 
// triângulo retângulo com 5 asteriscos de base.

n = 5;
line = '';
character = '*';

for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < i + 1; j += 1) {
        line += character;
    }
    console.log(line);
    line = '';
}

console.log(' ');

// 3 Agora inverta o lado do triângulo.

n = 5;
line = '';
character = '*';

for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
        if (j < (n - i - 1)) {
            line += ' ';
        } else {
            line += character;
        }
    }
    console.log(line);
    line = '';
}

// 4 Depois, faça uma pirâmide com n asteriscos de base.

n = 5;
line = '';
character = '*';