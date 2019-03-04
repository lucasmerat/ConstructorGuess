let Word = require('./word');
let inquirer = require('inquirer')

let words = ['hello','goodbye','sup'];

let randomWord = Math.floor(Math.random() * words.length);

let game = new Word(words[randomWord]);

game.addLetters();

console.log(game)

playGame()

function playGame (){
inquirer.prompt([
    {
        type: "input",
        name: "guess",
        message: "Guess a letter!"
    }
]).then(function(answer){
    game.guessLetter(answer.guess.toLowerCase());
    console.log(game)
    game.showWord();
    playGame();
})
}

// game.guessLetter('h');
// game.showWord();
// game.guessLetter('e');
// game.showWord();
// game.guessLetter('l');
// game.showWord();