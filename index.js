let Word = require("./word");
let inquirer = require("inquirer");

let game = new Word();

game.addLetters();

////Start of game

console.log(`
---------------------------
Welcome to node word guess! All the clues are coding-themed.
You have ${game.numGuesses} guesses to guess the secret word. Good luck!
---------------------------
`)
game.showWord();

playGame();

function playGame() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "guess",
        message: "Guess a letter!"
      }
    ])
    .then(function(answer) {
        let guess = answer.guess.toLowerCase();
        game.guessLetter(guess);
        game.showWord();
        if(game.incorrectGuesses > 5){
            return console.log(`Aw, you ran out of guesses, the word was: ${theWord} 
Try playing again!`)
        }
        if (game.checkWinGame()) {
          return;
        }
        playGame();
    });
}