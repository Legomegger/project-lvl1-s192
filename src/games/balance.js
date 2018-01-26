import { cons } from 'hexlet-pairs';
import engine from '../engine';

const rules = 'Balance the given number.';
const game = () => {
  const randomNumberGenerator = () => Math.floor(Math.random() * (1000));
  const question = randomNumberGenerator();
  const balance = (n) => {
    const workingNumber = String(n).split('').map(Number);
    const high = Math.max.apply(null, workingNumber);
    const low = Math.min.apply(null, workingNumber);
    if (high - low > 1) {
      workingNumber[workingNumber.indexOf(high)] -= 1;
      workingNumber[workingNumber.indexOf(low)] += 1;
      return balance(workingNumber.join(''));
    }
    return workingNumber.sort((min, max) => min - max).join('');
  };
  const correctAnswer = balance(question);
  return cons(question, String(correctAnswer));
};

export default () => engine(rules, game);
