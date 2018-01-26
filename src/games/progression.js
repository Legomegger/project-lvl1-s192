import { cons } from 'hexlet-pairs';
import engine from '..';

const rules = 'What number is missing in this progression?.';

const game = () => {
  const randomRangeNumberGenerator = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const firstNumber = randomRangeNumberGenerator(3, 10);
  const distance = randomRangeNumberGenerator(2, 5);
  const randomIndex = randomRangeNumberGenerator(1, 9);
  const makeProgression = (startN, step) => {
    const arrayProgression = [];
    for (let i = 1; i < 10; i += 1) {
      arrayProgression[0] = startN;
      arrayProgression[i] = arrayProgression[i - 1] + step;
    }
    return arrayProgression;
  };
  const progression = makeProgression(firstNumber, distance);
  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = progression;
  return cons(question, String(correctAnswer));
};

export default () => engine(rules, game);
