import getRandomNumber from "../randomNums.js";

import greeting from '../index.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number !== 1;
}

const generateRound = () => {
  const number = getRandomNumber();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, correctAnswer];
}

export default function runEvenGame() {
  greeting('Answer "yes" if given number is prime. Otherwise answer "no".', generateRound);
}