import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const gameLogic = (rules, game) => {
  console.log('Welcome to The Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${playerName}!`);
  const roundsToWin = 3;
  const rounds = (counter) => {
    if (counter === roundsToWin) {
      return console.log('You win!');
    }
    const logic = game();
    const question = car(logic);
    const answer = cdr(logic);
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
