import getRandomNumber from "../randomNums.js";

import readlineSync, { question } from 'readline-sync';

import greeting from '../index.js';

const isEven = (num) => num % 2 === 0;
const generateRound = () => {
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];

}
export default function runEvenGame() {
  greeting('Answer "yes" if the number is even, otherwise answer "no".', generateRound);
}