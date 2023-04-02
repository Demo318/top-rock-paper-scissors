const moveOptions = ["rock", "paper", "scissors"]

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3)
  return moveOptions[choice]
}

function playOneRound(playerSelection, computerSelection) {
  let finalMessage = "You lost that round 😔";
  let playerWon = -1;
  
  if (playerSelection == computerSelection){
    finalMessage = "It's a draw!";
    playerWon = 0;

  } else if (
    playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "scissors" && computerSelection == "paper" ||
    playerSelection == "paper" && computerSelection == "rock"
  ) {
    finalMessage = "You won this round 😊";
    playerWon = 1;
  }
  alert(finalMessage + `\n${playerSelection} vs. ${computerSelection}`);
  return playerWon;
}

function getPlayerSelection () {
  while (true) {
    let playerInput = prompt("Choose one:", "rock, paper, or scissors");
    if (moveOptions.includes(playerInput)) {
      return playerInput;
    } else {
      alert("That's not an option! Please choose rock, paper, or scissors.");
    };
  };
}

function game() {
  let playerWins = 0;
  let computerWins = 0;

  while (playerWins < 5 && computerWins < 5) {
    let gameResult = playOneRound(getPlayerSelection(), getComputerChoice());
    if (gameResult == 1) {
      playerWins ++;
    } else if (gameResult == -1) {
      computerWins ++;
    }
  }

  let endingMessage = playerWins > computerWins ? 
    "You won the game!" : "You lost the game.";
  return endingMessage
}

while (true) {
  alert(game());
}