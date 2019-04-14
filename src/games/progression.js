import makeGame from '..';
import getRandom from '../utils';
import { cons } from 'hexlet-pairs';

const getNumberList = (start, step, length) => {
  let newStep = start;
  const list = [];

  for (let i = 1; i <= length; i += 1) {
    newStep += step;
    list.push(newStep);
  }

  return list;
};

const gameConditions = 'What number is missing in the progression?';
const progressionLength = 10;

const createProgressionGame = () => {
  const getGameData = () => {
    const progressionStart = getRandom(2, 9);
    const progressionStep = getRandom(2, 9);
    const progression = getNumberList(progressionStart, progressionStep, progressionLength);

    const hiddenItemIndex = getRandom(0, progression.length - 1);
    const answer = progression[hiddenItemIndex];

    const getQuestion = () => {
      progression[hiddenItemIndex] = '..';

      let question = '';
      for (let i = 0; i < progression.length; i += 1) {
        question = `${question + progression[i]} `;
      }

      return question;
    };

    const question = getQuestion();

    return cons(question, answer);
  };

  makeGame(gameConditions, getGameData);
};

export default createProgressionGame;
