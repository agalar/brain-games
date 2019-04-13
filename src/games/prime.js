import makeGame from '..';
import { getRandomInt, isPrime } from '../utils';
import { cons } from 'hexlet-pairs';

const createPrimeGame = () => {
  const gameConditions = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getPrimeGameOptions = () => {
    const question = getRandomInt(2, 10);
    const answer = isPrime(question) ? 'yes' : 'no';

    return cons(question, answer);
  };

  makeGame(gameConditions, getPrimeGameOptions);
};

export default createPrimeGame;
