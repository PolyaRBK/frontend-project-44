import getRandomNumber from "../randomNums.js";

import greeting from '../index.js';

const operatorArray = ['+', '-', '*'];

const calculate = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    }
};

function generateRound () {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const index = getRandomNumber(0, operatorArray.length - 1);
  const selectedOperator = operatorArray[index];
  const operator = selectedOperator;
  const correctAnswer = String(calculate(number1, operator, number2));
  const question = `${number1}${operator}${number2}`;
  return [question, correctAnswer];
}

export default function runCalcGame() {
  greeting('What is the result of the expression?', generateRound);
}