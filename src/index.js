import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEven = () => {
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const userName = askName();

  const iter = (counter) => {
    if (counter === 0) {
      return console.log(`Congratulations, ${userName}!\n`);
    }
    const randomInt = getRandomInt(1, 100);
    console.log(`Question: ${randomInt}`);

    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = randomInt % 2 === 0 ? 'yes' : 'no';

    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      return console.log(`Let's try again, ${userName}!\n`);
    }

    return iter(counter - 1);
  };

  return iter(3);
};

export { askName, isEven };
