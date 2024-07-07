import getRandomNumber from "../randomNums.js";

import readlineSync from 'readline-sync';
    
let userName = null;

export default function runEvenGame () {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  runQuestion()
};

const isEven = (num) => num % 2 === 0;

function runQuestion () {
  for (let i = 0; i < 3; i += 1) {
    const question = getRandomNumber();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer:');

      let answer = null;
        if (isEven(question)) {
            answer = 'yes';
        } else {
            answer = 'no';
        };
        if (answer === answer) {
            console.log('Correct!');
        } else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${answerUser}.\nLet's try again, ${userName}!`);
            return;
        };
    }
    console.log(`Congratulations, ${userName}!`);
};