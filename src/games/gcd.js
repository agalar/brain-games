import makeGame from '..';
import getRandom from '../utils';
import { cons } from 'hexlet-pairs';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
};

const gameConditions = 'Find the greatest common divisor of given numbers.';

const createGcdGame = () => {
  const getGameData = () => {
    const firstNumber = getRandom(1, 12);
    const secondNumber = getRandom(1, 12);
    const question = `${firstNumber} ${secondNumber}`;
    const answer = String(getGcd(firstNumber, secondNumber));

    return cons(question, answer);
  };

  makeGame(gameConditions, getGameData);
};

export default createGcdGame;
