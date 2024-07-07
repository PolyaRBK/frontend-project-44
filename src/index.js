import readlineSync from 'readline-sync';

export default function greeting () {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(taskGame);

for (let i = 0; i < 3; i += 1) {
  console.log(`Question: ${question}`);
  const answerUser = readlineSync.question('Your answer:');

  if (answerUser !== answer) {
    console.log(`${answerUser} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${userName}!`);
  }
  console.log('Correct!');
}
console.log(`Congratulations, ${userName}!`);
};