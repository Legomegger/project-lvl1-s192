import { cons } from 'hexlet-pairs';
import engine from '../engine';

const rules = "What's the result of the expression?";
const game = () => {
  const randomNumberGenerator = () => Math.floor(Math.random() * (21 - 1));
  const firstOperand = randomNumberGenerator();
  const secondOperand = randomNumberGenerator();
  const operatorGenerator = Math.floor(Math.random() * (3));
  let operator = '';
  let correctAnswer;
  if (operatorGenerator === 0) {
    operator = '+';
    correctAnswer = firstOperand + secondOperand;
  }
  if (operatorGenerator === 1) {
    operator = '-';
    correctAnswer = firstOperand - secondOperand;
  }
  if (operatorGenerator === 2) {
    operator = '*';
    correctAnswer = firstOperand * secondOperand;
  }
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  return cons(question, String(correctAnswer));
};
engine(rules, game);
export default game;
