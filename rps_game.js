/*Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw. */

//Getting the user's choice

const getUserChoice = userInput => {
  //Making all user input lowercase
  userInput = userInput.toLowerCase();

  //Checking if the user typed valid choice: rock, paper, or scissors
  if(userInput === 'rock'  || userInput === 'paper' || userInput === 'scissors' ){
    return userInput;
  }else{
    console.log('Error!');
  }
};

//Test the function
//console.log(getUserChoice('rock'))

//Getting the computer's choice

const getComputerChoice = () => {
  //Generating a random number btw 0 and 2
  let randomNumber = Math.floor(Math.random()*3);
  //Depending on the number, return either rock, paper or scissors
  if(randomNumber === 0){
    return 'rock';
  }else if(randomNumber === 1){
    return 'paper';
  }else if(randomNumber === 2){
    return 'scissors';
  }
};
 //Test the function
//console.log(getComputerChoice());

//Comparing the two choices and determine a winner.

const determineWinner = (userChoice, computerChoice) => {
//Checks if the user choice is the same with computer choice
if(userChoice === computerChoice){
  return 'The game is a tie. No winner or Loser!';
}
//Checks if the user choice is rock; And if computer choice is papar
if(userChoice === 'rock'){
  if(computerChoice === 'paper'){
    return 'The computer won!';
  }else{
    return 'Congratulations! You won!';
  }
}
//Checks if the user choice is paper; And if the computer choice is rock
if(userChoice === 'paper'){
  if(computerChoice === 'rock'){
    return 'Congratulations! You won!';
  }else{
    return 'The computer won!';
  }
}
/*Checks if the user choice is scissors; And the computer choice is paper or rock */
if(userChoice === 'scissors'){
  if(computerChoice === 'paper'){
     return 'Congratulations! You won!';
  }else{
    return 'The computer won!';
  }
}
};

//Test the function
//console.log(determineWinner('rock', 'rock'));

//Start the program and display the results.
const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

//start the game by calling the playGame()
console.log(playGame());