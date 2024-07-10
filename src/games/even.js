import getRandomNumber from "../randomNums.js";

import greeting from '../index.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default function runEvenGame() {
  greeting('Answer "yes" if the number is even, otherwise answer "no".', generateRound);
}