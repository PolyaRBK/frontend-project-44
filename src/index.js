import readlineSync from 'readline-sync';

export default function greeting (rules, callBack) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

for (let i = 0; i < 3; i += 1) {
  const [question, correctAnswer] = callBack();
  console.log(`Question: ${question}`);
  const answerUser = readlineSync.question('Your answer:');

  if (answerUser !== correctAnswer) {
    console.log(`${answerUser} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
    return;
  } else {
    console.log('Correct!');
  }
}
console.log(`Congratulations, ${userName}!`);
};