import randomNumber from "../randomNums.js";
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
        const question = randomNumber();
        console.log(`Question: ${question}`);
        const answer = readlineSync.question('Your answer:');

        let answer1 = null;
        if (isEven(question)) {
            answer1 = 'yes';
        } else {
            answer1 = 'no';
        };
        if (answer === answer1) {
            console.log('Correct!');
        } else {
            console.log(`${answer1} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${userName}!`);
            return;
        };
    }
    console.log(`Congratulations, ${userName}!`);
}
