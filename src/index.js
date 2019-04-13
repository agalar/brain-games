import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const roundCount = 3; // Количество раундов
const greeting = () => console.log('Welcome to the Brain Games!'); // Стандартное приветствие в игре

// Получаем имя пользователя
const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

// получаем рандомное целое число
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEven = number => number % 2 === 0;

// флоу всех игр
const brainGame = (gameConditions, gamePair) => {
  greeting();
  console.log(`${gameConditions}\n`);

  const userName = getName();

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

  return iter(roundCount);
};

export { brainGame, isEven, getRandomInt };
