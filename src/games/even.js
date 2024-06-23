const startMainGame = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name?');
    console.log(`Hello, ${userName}!`);
};

сonsole.log('Answer "yes" if the number is even, otherwise answer "no".');

// Генерация рандомного числа

const randomNumber = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };
  console.log(`Question: ${randomNumber(1, 5)}`);

// Проверка на чётность

const isEven = (num) => num % 2 === 0;

const answer = eadlineSync.question('Your answer:');
