const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const operatorIndex = getRandomInt(0, operators.length - 1);
  return operators[operatorIndex];
};

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
};

export { getRandomInt, getRandomOperator, getGcd };
