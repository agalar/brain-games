import makeGame from '..';
import { getRandomInt, getGcd } from '../utils';
import { cons } from 'hexlet-pairs';

const createGcdGame = () => {
  const gameConditions = 'Find the greatest common divisor of given numbers.';

  const getGcdOptions = () => {
    const firstNumber = getRandomInt(1, 12);
    const secondNumber = getRandomInt(1, 12);
    const question = `${firstNumber} ${secondNumber}`;
    const answer = getGcd(firstNumber, secondNumber);

    return cons(question, answer);
  };

  makeGame(gameConditions, getGcdOptions);
};

export default createGcdGame;
