import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const getQuestion = makeGame => car(makeGame);
export const getCorrectAnswer = makeGame => cdr(makeGame);

const gameLogic = (rules, game) => {
  console.log('Welcome to The Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${playerName}!`);
  console.log(`${rules}`);
  const roundsToWin = 3;
  const rounds = (counter) => {
    if (counter === roundsToWin) {
      return console.log(`Congratulations ${playerName}. You win!`);
    }
    const logic = game();
    const question = getQuestion(logic);
    const answer = getCorrectAnswer(logic);
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (answer === playerAnswer) {
      console.log('Correct!');
      return rounds(counter + 1);
    }
    return console.log(`${playerAnswer} was incorrect, correct is ${answer}`);
  };
  return rounds(0);
};

export default gameLogic;
