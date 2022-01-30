const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      // generates a random number in the range of smallestNum- biggestNum 
      let getGuessNum 
      let callRender 
    do {
      getGuessNum = this.getGuess()
      // variable stores the return value of getGuess(), invoked getGuess() 
      this.prevGuesses.push(getGuessNum)
      // adds the user's guess to the prevGuesses array
      callRender = this.render(getGuessNum)
      // invoked the render() function, its argument is a variable that points to the returned value of getGuess()

      // if(getGuessNum === this.secretNum) break
      // break statement to exit the loop and end the game when secretNum is guessed

    } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum)
    // used bracket notation to refer to the last element in the prevGuesses array
    // while the last element in the array is not the same as the secret number, invoke getGuess() and add its value (currentGuess) to the array, also invoke render()
    return
    // ends play method when secretNum is guessed
  },
  getGuess: function() {
     let input = null
     // input refers to the user input of the prompt message
    while(input !== this.secretNum){
      input = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum} :`)
       // prompt returns a string containing the text entered by the user
      let currentGuess = parseInt(input)
      // parseInt converts the input (initially a string) to a number
      return currentGuess
    // if the input is not the same as secretNum, the while loop continues to prompt the user to enter a guess
    }
  },
  render: function(valueOfGetGuess) {
    // render method alerts the user with a message, depending on the user's guess 
    // parameter for render() is a placeholder for the argument getGuessNum, (variable that holds user's guess)
    // variable getGuessNum created in play can't be accessed here
    if(valueOfGetGuess === this.secretNum) {
      alert(`Congrats! You guessed the number in ${this.prevGuesses.length} attempts!`)
      // if the user's guess is the same as secretNum, alert
    } else if (valueOfGetGuess > this.secretNum) {
      alert(`Your guess is too high! Previous guesses: ${this.prevGuesses.join(', ')}`)
      // if the user's guess is greater than secretNum, alert
    } else if (valueOfGetGuess < this.secretNum) {
      alert(`Your guess is too low! Previous guesses: ${this.prevGuesses.join(', ')}`)
      // if the user's guess is less than secretNum, alert
    }
  },
}

game.play()
// invokes the play method in the game object
  



