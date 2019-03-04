let Letter = require('./Letter');

let newLetter = new Letter();

// console.log(newLetter)

function Word(word){
    this.letters = [], // Need to make this use the new letter object
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
             console.log(letterObj)
         })
    }
}

let newWord = new Word('hello');

newWord.addLetters();
// newWord.guessLetter('h');
newWord.showWord();

// newWord.showWord();