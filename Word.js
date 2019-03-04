let Letter = require('./Letter');

// console.log(newLetter)

function Word(word){
    this.letters = [],
    this.checkWinGame = function(){
        let correctCount = 0;
        this.letters.forEach(function(letter){
            if(letter.guessed){
                correctCount++;
            }
        })
        if (correctCount === this.letters.length){
            console.log("You win!")
            return true;
        }
    },
    this.incorrectGuesses = 0,
    this.guessesRemaining = this.letters.length - this.incorrectGuesses, // Need to make this use the new letter object
    this.addLetters = function() {
        for(let i=0;i<word.length;i++){
            this.letters.push(new Letter(word[i]))
        }
    },
    this.showWord = function(){
        let fullWord = [];
        for(let i=0;i<this.letters.length;i++){
           fullWord.push(this.letters[i].returnLetter());
        }
        console.log(fullWord.join(' '))
    }
    this.guessLetter = function (letter){
         this.letters.forEach(function(letterObj){
            letterObj.isCorrect(letter)
            // console.log(letterObj)
         })
    }
}

module.exports = Word;