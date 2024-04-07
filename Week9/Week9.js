console.log("Hi! This is Chapter 9: Lab Assignment.")
console.log("*   *   *   *");

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)]; //This will generate random choice from options listed above.
  return choice;
}

function checkWinner(playerSelection, computerSelection) {
  if(playerSelection == computerSelection) {
    return "Tie"; //Results in a tie if Player and Computer selects the same option.
  } else if ( 
    (playerSelection == "rock" && computerSelection == "scissors") || 
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")){
    return "Player"; //Player wins if any of the above scenariois met.
  } else {
    return "Computer" //Computer wins if none of the above scenarios are met.
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if(result == "Tie") {
    return "It's a TIE!";
  } else 
  if(result == "Player") {
    return `You win! ${playerSelection} beats ${computerSelection}`
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`
  }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


function getPlayerChoice() {
  let validatedInput = false;
  while(validatedInput == false) {
    const choice = prompt("Rock, Paper, or Scissors?"); //Prompts user to input choice.
    if (choice == !null) {
      continue; //Hit "Cancel" button to exit dialog box.
    }
    const choiceInLower = choice.toLowerCase();
    if(options.includes(choiceInLower)) {
      validatedInput == true;
      return choiceInLower; //Returns choice into lower case and validates if the entered choice is among the options.
    }
  }
}


function game() {
  let scorePlayer = 0; //Player score starts at 0.
  let scoreComputer = 0; //Computer score starts at 0.
  for (let i = 0; i < 5; i++) { //Array sets the game to be played for 5 rounds.
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("----------");
    if(checkWinner(playerSelection, computerSelection) == "Player"){
      scorePlayer++;
    } else 
    if(checkWinner(playerSelection, computerSelection) == "Computer"){
      scoreComputer++;
    }
  }
  console.log("Game over!") //The game is over after 5 rounds.
  if(scorePlayer > scoreComputer){
    console.log("Player is the winner!")
  } else 
  if(scorePlayer < scoreComputer){
    console.log("Computer is the winner!")
  } else {
    console.log("No winner - it's a TIE!");
  }
}

game()
