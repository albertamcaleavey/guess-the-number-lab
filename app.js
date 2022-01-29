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
    let currentGuess = null
    while(this.currentGuess !== this.secretNum){
      this.currentGuess = prompt (`Enter a guess between ${this.smallestNum} and ${this.biggestNum} :`)
    }
    // currentGuess points to the user input of the prompt message that appears in the window
    
    // if the currentGuess is not the same as secretNum, the while loop continues to prompt the user to enter a guess until it is
    
  }
  
}

// console.log(game.getGuess())