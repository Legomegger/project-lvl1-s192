import { cons } from 'hexlet-pairs';
import engine from '../engine';

const rules = 'Answer "yes" if number even otherwise answer "no".';
const game = () => {
  const randomNumberGenerator = () => Math.floor(Math.random() * (21 - 1));
  const question = randomNumberGenerator();
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return cons(question, correctAnswer);
};
export default game;

engine(rules, game);
