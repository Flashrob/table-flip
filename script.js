let word = [
  ['c','a','t'],
  ['d','o','g','g','y'],
  ['a','l','p','h','a','b','e','t'],
  ["hello"],
  ["bathing"]
];

for (let i = 0; i < word.length; i++) {
  if (word[i].length === 1) {
    word [i] = word[i][0].split("")
  }
}


let secretWord = word[Math.floor(Math.random() * ((word.length - 1) - 0 + 1) ) + 0]

let tableFlip = ["(", "╯", "ರ", " ", "~", " ", "ರ", ")", " ", "╯", "︵", " ", "┻", "━", "┻"]
const gameLength = tableFlip.length

let currentTableFlip = []

let correctLetter = ""
let correctGuesses = []

for (let i = 0; i < secretWord.length; i++) {
  correctGuesses[i] = `_`
}

let wrongGuesses = 0

var inputHappened = function (currentInput) {

  for (let i = 0; i < secretWord.length; i++) {
    if (currentInput === secretWord[i]) {

        let letterIndexFront = secretWord.indexOf(currentInput)
        correctGuesses[letterIndexFront] = `${currentInput}`
        let letterIndexBack = secretWord.lastIndexOf(currentInput)
        if (letterIndexBack !== letterIndexFront) {
          correctGuesses[letterIndexBack] = `${currentInput}`
        }

        correctLetter = correctLetter + currentInput
        if (correctGuesses.join("") === secretWord.join("")) {
          return `You win!`
        }
        return `You guessed it RIGHT! - Your correct guesses: ${correctGuesses.join("")}`
    }
  }
      let shiftedCharacter = tableFlip.shift() 
      currentTableFlip.push(shiftedCharacter)
      wrongGuesses++
      if (wrongGuesses > gameLength) {
        return `Game over!`
      } else {
        return `${currentTableFlip.join("")}`
      }
      
}