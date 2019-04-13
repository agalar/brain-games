import makeGame from '..';
import { getRandomInt } from '../utils';
import { cons } from 'hexlet-pairs';

const createEvenGame = () => {
  const gameConditions = 'Answer "yes" if number even otherwise answer "no".';

  const getEvenOptions = () => {
    const question = getRandomInt(1, 10);
    const answer = question % 2 === 0 ? 'yes' : 'no';

    return cons(question, answer);
  };

  makeGame(gameConditions, getEvenOptions);
};

export default createEvenGame;
