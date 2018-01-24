import { cons } from 'hexlet-pairs';
import engine from '../engine';

const rules = 'Find the greatest common divisor of given numbers.';
const game = () => {
  const randomNumberGenerator = () => Math.floor(Math.random() * (21 - 1));
  const firstNumber = randomNumberGenerator();
  const secondNumber = randomNumberGenerator();
  const question = `${firstNumber} ${secondNumber}`;
  const findGcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return findGcd(b, a % b);
  };
  const correctAnswer = findGcd(firstNumber, secondNumber);
  return cons(question, String(correctAnswer));
};
export default () => engine(rules, game);
