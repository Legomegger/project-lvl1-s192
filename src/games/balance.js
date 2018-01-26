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
    const isBalanced = (a, b) => {
      if (a - b <= 1) {
        return true;
      }
      return false;
    };
    if (isBalanced(high, low) === true) {
      return workingNumber.sort((min, max) => min - max).join('');
    }
    workingNumber[workingNumber.indexOf(high)] -= 1;
    workingNumber[workingNumber.indexOf(low)] += 1;
    return balance(workingNumber.join(''));
  };
  const correctAnswer = balance(question);
  return cons(question, String(correctAnswer));
};

export default () => engine(rules, game);
