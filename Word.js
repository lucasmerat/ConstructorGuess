let Letter = require('./Letter');

// console.log(newLetter)

function Word(){
    this.words = ["function"],
    this.randomNum = Math.floor(Math.random() * this.words.length),
    this.theWord = this.words[this.randomNum],
    this.letters = [],
    this.numGuesses = 6,
    this.lettersGuessed = [],
    this.incorrectGuesses = 0,
    this.checkWinGame = function(){
        let correctCount = 0;
        this.letters.forEach(function(letter){
            if(letter.guessed){
                correctCount++;
            }
        })
        if (correctCount === this.letters.length){
            console.log("You got it. Great job!!")
            return true;
        }
    },
    this.addLetters = function() {
        for(let i=0;i<this.theWord.length;i++){
            this.letters.push(new Letter(this.theWord[i]))
        }
    },
    this.showWord = function(){
        let fullWord = [];
        for(let i=0;i<this.letters.length;i++){
           fullWord.push(this.letters[i].returnLetter());
        }
        console.log(`${fullWord.join(" ")}
`)
    }
    this.guessLetter = function (letter){
        let found = false;
        for(let i=0;i<this.letters.length;i++){
            if(this.letters[i].letter === letter){
                this.letters[i].isCorrect(letter)
                found = true;
            }
        }
        if(found){
            console.log(`Yep! There is the letter ${letter} in the secret word. You have ${this.numGuesses - this.incorrectGuesses} guesses remaining.`)
        }
        if(!found && this.lettersGuessed.indexOf(letter) === -1){
            this.lettersGuessed.push(letter)
            this.incorrectGuesses++;
            console.log(`
-----------------------------------          
Nope, no "${letter}" in the secret word, you have ${this.numGuesses - this.incorrectGuesses} guesses remaining.

So far you have guessed the letters: ${this.lettersGuessed}`)
        }
    }
}

module.exports = Word;