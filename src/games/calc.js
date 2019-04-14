import makeGame from '..';
import getRandom from '../utils';
import { cons } from 'hexlet-pairs';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const operatorIndex = getRandom(0, operators.length - 1);
  return operators[operatorIndex];
};

const gameConditions = 'What is the result of the expression?';

const createCalcGame = () => {
  const calculateAnswer = (a, b, operator) => {
    let result;
    switch (operator) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      default:
    }
    return result;
  };

  const getGameData = () => {
    const firstOperand = getRandom(1, 10);
    const secondOperand = getRandom(1, 10);
    const operator = getRandomOperator();
    const question = `${firstOperand} ${operator} ${secondOperand}`;
    const answer = calculateAnswer(firstOperand, secondOperand, operator);

    return cons(question, answer);
  };

  makeGame(gameConditions, getGameData);
};

export default createCalcGame;
