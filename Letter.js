function Letter(letter){
    this.letter = letter,
    this.guessed = false,
    this.returnLetter = function(){
        if (this.guessed){
            return this.letter;
        } else {
            return '_'
        }
    },
    this.isCorrect = function(guess){
        if(guess === this.letter){
            this.guessed = true;
            return console.log('Correct guess!')
        } else {
            return console.log('Incorrect guess :(')
        }
    }
}

module.exports = Letter;

// let newGuess = new Letter();

// newGuess.letter = 'z';
// newGuess.isCorrect('z');
// console.log(newGuess.guessed);