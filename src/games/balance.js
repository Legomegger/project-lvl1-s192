import { cons } from 'hexlet-pairs';
import engine from '../engine';

const rules = 'Balance the given number.';
const game = () => {
  const randomNumberGenerator = () => Math.floor(Math.random() * (1000));
  const question = randomNumberGenerator();
  const isBalanced = (n) => {
    if (n <= 9) {
      return true;
    }
    const strNum = String(n).split('');
    return console.log(strNum);
  };
  console.log(question);
  console.log(isBalanced(question))
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return cons(question, String(correctAnswer));
};

export default () => engine(rules, game);
