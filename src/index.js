import readlineSync from 'readline-sync';

const greeting = () => console.log('Welcome to the Brain Games!');

const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEven = number => number % 2 === 0;

const checkEven = () => {
  greeting();

  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const userName = getName();
  const correctAnswerCount = 3;

  const iter = (counter) => {
    if (counter === 0) {
      return console.log(`Congratulations, ${userName}!\n`);
    }
    const question = getRandomInt(1, 100);
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(question) ? 'yes' : 'no';

    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      return console.log(`Let's try again, ${userName}!\n`);
    }

    return iter(counter - 1);
  };

  return iter(correctAnswerCount);
};

const calc = () => true;

export { checkEven, calc };
