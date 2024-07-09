import getRandomNumber from "../randomNums.js";

import greeting from '../index.js';

function getRandomOperation () {
  const operators = ['+', '-', '*'];
  const indexOfOperators = getRandomNumber(0, operators.length);
  const operator = operators[indexOfOperators];
  return operator;
}

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
  const operator = getRandomOperation();
  const answer = String(calculate(number1, operator, number2));
  const question = `${number1}${operator}${number2}`;
  return [question, answer];
}

export default function runCalcGame() {
  greeting('What is the result of the expression?', generateRound);
}