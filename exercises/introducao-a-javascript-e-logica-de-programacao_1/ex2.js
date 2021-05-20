let a = 10;
let b = 20;
let c = 30;

let maior;

if (a > b && a > c) {
    maior = a;
} else if (b > a && b > c) {
    maior = b;
} else {
    maior = c;
}

console.log(`O maior é: ${maior}`);