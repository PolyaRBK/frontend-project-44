import getRandomNumber from "../randomNums.js";

import greeting from '../index.js';

/*const taskGame = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculation = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
        return number1 * number2;
    }
};
startGame();
const startGame = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operator = operators[index];
  const question = `${number1}${operator}${number2}`;
  const answer = calculation(number1, number2, operator);
  return [question, answer];
};

export default () => greeting(taskGame, startGame); */



const taskGame = 'What is the result of the expression?';

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

function startGame () {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operator = getRandomOperation();
  const correctAnswer = calculate(randomNum1, randomNum2, operator);
  const question = `${number1}${operator}${number2}`;
    
    for (let i = 0; i < 3; i += 1) {

  }



  console.log(`Question:${number1}${operators[i]}${number2}`);
  const answerUser = readlineSync.question('Your answer:');

  let answer = null;




}