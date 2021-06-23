const numberChecker = (myNumber, randomNumber) => myNumber === randomNumber;

const lottery = (myNumber, callback) => {
  const randomNumber = Math.floor(Math.random() * 5 + 1);
  return callback(myNumber, randomNumber) ? `Parabéns, você ganhou!` : `Número sorteado: ${randomNumber} - Tente novamente!`;
}

console.log(lottery(3, numberChecker));
