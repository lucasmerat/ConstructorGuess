let Word = require('./word');

let words = ['hello','goodbye','sup'];

let randomWord = Math.floor(Math.random() * words.length);

let game = new Word(words[randomWord])

game.addLetters();

game.guessLetter('h');
game.showWord();
game.guessLetter('e');
game.showWord();
game.guessLetter('l');
game.showWord();