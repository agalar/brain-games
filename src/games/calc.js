import makeGame from '..';
import { getRandomInt, getRandomOperator } from '../utils';
import { cons } from 'hexlet-pairs';

const calc = () => {
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

  const getCalcPair = () => {
    const firstOperand = getRandomInt(1, 10);
    const secondOperand = getRandomInt(1, 10);
    const operator = getRandomOperator();
    const question = `${firstOperand} ${operator} ${secondOperand}`;
    const answer = calculateAnswer(firstOperand, secondOperand, operator);

    return cons(question, answer);
  };

  makeGame('What is the result of the expression?', getCalcPair);
};

export default calc;
