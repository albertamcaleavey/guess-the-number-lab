const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      let getGuessNum 
    do {
      getGuessNum = this.getGuess()
      this.prevGuesses.push(getGuessNum)
      console.log(this.prevGuesses)
    } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum)
  },
  getGuess: function() {
     let input = null
    while(input !== this.secretNum){
      input = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum} :`)
      let currentGuess = parseInt(input)
      return currentGuess
    }
  }
}

console.log(game.play())

// console.log(game.getGuess())

     // input points to the user input of the prompt message that appears in the window
    // prompt returns a string containing the text entered by the user
    //parseInt returns the input of the prompt as a number, so currentGuess = the number the user entered
    // if the input is not the same as secretNum, the while loop continues to prompt the user to enter a guess until it is
     





