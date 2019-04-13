import makeGame from '..';
import { getRandomInt } from '../utils';
import { cons } from 'hexlet-pairs';

const gcd = () => {
  const getGcd = (a, b) => {
    if (!b) {
      return a;
    }
    return getGcd(b, a % b);
  };

  const getGcdPair = () => {
    const firstOperand = getRandomInt(1, 12);
    const secondOperand = getRandomInt(1, 12);
    const question = `${firstOperand} ${secondOperand}`;
    const answer = getGcd(firstOperand, secondOperand);

    return cons(question, answer);
  };

  makeGame('Find the greatest common divisor of given numbers.', getGcdPair);
};

export default gcd;
