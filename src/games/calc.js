import { brainGame, getRandomInt } from '..';
import { cons, car, cdr } from 'hexlet-pairs';

const calc = () => {
  const operators = ['+', '-', '*'];
  const operatorIndex = Math.floor(Math.random() * operators.length);
  const operator = operators[operatorIndex];

  const getRandomResult = (a, b) => {
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
        console.log(`${operator} не является оператором`);
    }
    return result;
  };

  const calcGame = () => () => {
    const pair = cons(getRandomInt(1, 100), getRandomInt(1, 100));
    const question = `${car(pair)} ${operator} ${cdr(pair)}`;
    const answer = getRandomResult(car(pair), cdr(pair));

    return cons(question, answer);
  };

  brainGame('What is the result of the expression?', calcGame());
};

export default calc;
