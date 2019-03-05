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
        message: "Guess a letter!",
        validate: function(value){
            let lowVal = value.toLowerCase()
            let reg = /[a-z]/
            if(lowVal.length > 1){
                console.log('  STOP! Please only enter 1 letter at a time')
                return false;
            } else if(!reg.test(lowVal)){
                console.log(' STOP! Make sure you are only entering letters!')
                return false;
            } else {
                return true;
            }
        }
      }
    ])
    .then(function(answer) {
        let guess = answer.guess.toLowerCase();
        game.guessLetter(guess);
        game.showWord();
        if(game.incorrectGuesses > 5){
            return console.log(`Aw, you ran out of guesses, the word was: ${game.theWord} 
Try playing again!`)
        }
        if (game.checkWinGame()) {
          return;
        }
        playGame();
    });
}