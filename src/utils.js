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

const getNumberList = (start, step, length) => {
  let newStep = start;
  const list = [];

  for (let i = 1; i <= length; i += 1) {
    newStep += step;
    list.push(newStep);
  }

  return list;
};

const isPrime = (number) => {
  const minPrimeNumber = 2;

  if (number < minPrimeNumber) return false;

  for (let i = minPrimeNumber; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

export {
  getRandomInt, getRandomOperator, getGcd, getNumberList, isPrime,
};
