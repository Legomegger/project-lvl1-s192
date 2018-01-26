import { cons } from 'hexlet-pairs';
import engine from '..';

const rules = 'Is this number prime?';

const game = () => {
  const randomNumberGenerator = () => Math.floor(Math.random() * (100));
  const number = randomNumberGenerator();
  const isPrime = (n) => {
    if (n < 2) {
      return false;
    }
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };
  const question = number;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return cons(question, String(correctAnswer));
};

export default () => engine(rules, game);
