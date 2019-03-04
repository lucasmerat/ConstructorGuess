let Word = require('./word');
let inquirer = require('inquirer')

let words = ['hello','goodbye','sup'];

let randomWord = Math.floor(Math.random() * words.length);

let game = new Word(words[randomWord]);

game.addLetters();

// console.log(game)

playGame()

function playGame (){
inquirer.prompt([
    {
        type: "input",
        name: "guess",
        message: "Guess a letter!"
    }
]).then(function(answer){
    let guess = answer.guess.toLowerCase()
    game.guessLetter(guess);
    console.log(game.letters)
    game.showWord();
    if(game.checkWinGame()){
        return;
    }
    playGame();
})
}

// game.guessLetter('h');
// game.showWord();
// game.guessLetter('e');
// game.showWord();
// game.guessLetter('l');
// game.showWord();