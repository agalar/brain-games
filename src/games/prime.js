import makeGame from '..';
import getRandom from '../utils';
import { cons } from 'hexlet-pairs';

const isPrime = (number) => {
  const minPrimeNumber = 2;

  if (number < minPrimeNumber) return false;

  for (let i = minPrimeNumber; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const gameConditions = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const createPrimeGame = () => {
  const getGameData = () => {
    const question = getRandom(2, 10);
    const answer = isPrime(question) ? 'yes' : 'no';

    return cons(question, answer);
  };

  makeGame(gameConditions, getGameData);
};

export default createPrimeGame;
