import makeGame from '..';
import getRandom from '../utils';
import { cons } from 'hexlet-pairs';

const gameConditions = 'Answer "yes" if number even otherwise answer "no".';

const createEvenGame = () => {
  const getGameData = () => {
    const question = getRandom(1, 10);
    const answer = question % 2 === 0 ? 'yes' : 'no';

    return cons(question, answer);
  };

  makeGame(gameConditions, getGameData);
};

export default createEvenGame;
