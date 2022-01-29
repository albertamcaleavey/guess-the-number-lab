const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  },
  getGuess: function() {
    let input = null
    while(input !== this.secretNum){
      input = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum} :`)
      let currentGuess = parseInt(input)
      console.log(currentGuess)

      // return currentGuess
      
    }

    // input points to the user input of the prompt message that appears in the window
    // parseInt returns the input of the prompt as a number, currentGuess = the number the user entered
    // if the input is not the same as secretNum, the while loop continues to prompt the user to enter a guess until it is
    
  }
  
}
      
      
console.log(game.play())
console.log(game.getGuess())

// getGuess should return the value of the current guess
