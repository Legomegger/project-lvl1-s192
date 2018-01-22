import readlineSync from 'readline-sync';
console.log(`Welcome to the Brain Games!`);
console.log(`Hello, May I have your name?`)
const playerName = readlineSync.question('Your name: ');
console.log(`Hello, ${playerName}!`);
