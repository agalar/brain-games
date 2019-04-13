import makeGame from '..';
import { getRandomInt, getNumberList } from '../utils';
import { cons } from 'hexlet-pairs';

const createProgressionGame = () => {
  const gameConditions = 'What number is missing in the progression?';

  const getProgressionGameOptions = () => {
    const progressionStart = getRandomInt(2, 9);
    const progressionStep = getRandomInt(2, 9);
    const progressionLength = 10;

    const progressionList = getNumberList(progressionStart, progressionStep, progressionLength);

    const hiddenItemIndex = getRandomInt(0, progressionList.length - 1);
    const answer = progressionList[hiddenItemIndex];

    const getProgressionQuestion = () => {
      progressionList[hiddenItemIndex] = '..';

      let question = '';
      for (let i = 0; i < progressionList.length; i += 1) {
        question += `${progressionList[i]} `;
      }

      return question;
    };

    const question = getProgressionQuestion();

    return cons(question, answer);
  };

  makeGame(gameConditions, getProgressionGameOptions);
};

export default createProgressionGame;
