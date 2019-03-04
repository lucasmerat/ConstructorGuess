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
        }
    }
}

module.exports = Letter;