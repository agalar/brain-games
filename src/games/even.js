import { brainGame, isEven, getRandomInt } from '..';
import { cons } from 'hexlet-pairs';

const checkEven = () => {
  const evenGame = () => () => {
    const question = getRandomInt(1, 100);
    const answer = isEven(question) ? 'yes' : 'no';

    return cons(question, answer);
  };

  brainGame('Answer "yes" if number even otherwise answer "no".', evenGame());
};

export default checkEven;
