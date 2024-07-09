import getRandomNumber from "../randomNums.js";

import greeting from '../index.js';

const calculate = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return getCalc(number2, number1 % number2);
};

function generateRound () {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const answer = calculate(number1, number2);
  const question = `${number1}${number2}`;
  return [question, answer];
}

export default function runGcdGame() {
  greeting('Find the greatest common divisor of given numbers.', generateRound);
}

