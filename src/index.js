import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const numberOfRounds = 3;

const makeGame = (gameConditions, getGameOptions) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameConditions}\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = (counter) => {
    if (counter === 0) {
      return console.log(`Congratulations, ${userName}!\n`);
    }
    const gameOptionsPair = getGameOptions();
    const question = car(gameOptionsPair);
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = String(cdr(gameOptionsPair));

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
