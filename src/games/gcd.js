import getRandomNumber from "../randomNums.js";

import greeting from '../index.js';

const calculate = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return calculate(number2, number1 % number2);
};

function generateRound () {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const correctAnswer = String(calculate(number1, number2));
  const question = `${number1} ${number2}`;
  return [question, correctAnswer];
}

export default function runGcdGame() {
  greeting('Find the greatest common divisor of given numbers.', generateRound);
}

