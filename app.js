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
      // created a variable to store the return value of getGuess() and invoked the getGuess() function
      this.prevGuesses.push(getGuessNum)
      // adds the user's guess to the prevGuesses array
      // console.log(this.prevGuesses)
      // return this.prevGuesses
      callRender = this.render(getGuessNum)
      //invoked the render() function, the argument is the variable that points to the returned value of getGuess()
    } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum)
    // used bracket notation to refer to the last element in the prevGuesses array
    // while the last element in the array is not the same as the secret number, invoke getGuess() and add its value (currentGuess) to the array, also invoke render()
  },
  getGuess: function() {
     let input = null
     // input points to the user input of the prompt message that appears in the window
    while(input !== this.secretNum){
      input = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum} :`)
       // prompt returns a string containing the text entered by the user
      let currentGuess = parseInt(input)
      //parseInt returns the input of the prompt as a number, so currentGuess = the number the user entered
      return currentGuess
    // if the input is not the same as secretNum, the while loop continues to prompt the user to enter a guess until it is
    }
  },
  render: function(valueOfGetGuess) {
    // entered a parameter for the render() function which is a placeholder for the argument getGuessNum, (variable that points to return value of getGuess())
    // the variable getGuessNum created in play can't be accessed here, in the local scope of this function 
    if(valueOfGetGuess === this.secretNum) {
      alert(`Congrats! You guessed the number in ${this.prevGuesses[this.prevGuesses.length - 1]} attempts!`)
      // if the user's guess is the same as secretNum, show the above message 
    } else if (valueOfGetGuess > this.secretNum) {
      alert(`Your guess is too high! Previous guesses: ${this.prevGuesses}`)
      // if the user's guess is greater than secretNum, show the above message
    } else if (valueOfGetGuess < this.secretNum) {
      alert(`Your guess is too low! Previous guesses: ${this.prevGuesses}`)
      // if the user's guess is less than secretNum, show the above message
      // do i need to return a value here?
    }
  },
}

console.log(game.play())
// invokes the play function in the game object
  



