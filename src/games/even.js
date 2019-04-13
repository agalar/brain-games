import makeGame from '..';
import { getRandomInt } from '../utils';
import { cons } from 'hexlet-pairs';

const checkEven = () => {
  const getEvenPair = () => {
    const question = getRandomInt(1, 10);
    const answer = question % 2 === 0 ? 'yes' : 'no';

    return cons(question, answer);
  };

  makeGame('Answer "yes" if number even otherwise answer "no".', getEvenPair);
};

export default checkEven;
