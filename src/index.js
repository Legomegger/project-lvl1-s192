import readlineSync from 'readline-sync';

const game = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Hello, May I have your name?');
  const playerName = readlineSync.question('Your name: ');
  console.log(`Hello, ${playerName}!`);
  const iter = (counter) => {
    if (counter === 3) {
      return console.log(`You Win Congratulations ${playerName}!`);
    }
    console.log('Answer "yes" if number even otherwise answer "no".');
    const randomNumberGenerator = () => Math.floor(Math.random() * (21 - 1));
    const evenChecker = f => (f % 2 === 0 ? 'yes' : 'no');
    const randomNumber = randomNumberGenerator();
    const anchor = evenChecker(randomNumber);
    const askQuestion = num => console.log(`Question: ${num}`);
    askQuestion(randomNumber);
    const answer = readlineSync.question('Your answer: ');
    const compare = () => {
      if (answer === anchor) {
        console.log('Correct!');
        return iter(counter + 1);
      }
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${answer === 'no' ? 'yes' : 'no'}`);
    };
    compare();
    return 0;
  };
  return iter(0);
};
export default game;
