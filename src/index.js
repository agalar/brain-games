import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const makeGame = (gameConditions, gamePair) => {
  const numberOfRounds = 3;
  console.log('Welcome to the Brain Games!');
  console.log(`${gameConditions}\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = (counter) => {
    if (counter === 0) {
      return console.log(`Congratulations, ${userName}!\n`);
    }
    const pair = gamePair();
    const question = car(pair);
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = String(cdr(pair));

    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      return console.log(`Let's try again, ${userName}!\n`);
    }

    return iter(counter - 1);
  };

  return iter(numberOfRounds);
};

export default makeGame;
