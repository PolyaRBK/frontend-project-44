import getRandomNumber from "../randomNums.js";

import greeting from '../index.js';

const getProgression = (startNumber, stepNumber, hiddenStep) => {
  const progression = [];
  for (let i = 0; i < 10; i += 1) {
    progression.push(startNumber + i * stepNumber);
  }
  const correctAnswer = String(progression[hiddenStep]);
  progression[hiddenStep] = '..';
  return [progression.join(' '), correctAnswer];
}

const generateRound = () => {
  const number = getRandomNumber();
  const stepNumber = getRandomNumber(2, 5);
  const hiddenStep = getRandomNumber(0, 9);
  const [qustion, answer] = getProgression(number, stepNumber, hiddenStep);
  return [qustion, answer];
}

export default function runProgressionGame() {
  greeting('What number is missing in the progression?', generateRound);
}