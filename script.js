const moveOptions = ["rock", "paper", "scissors"]

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3)
  return moveOptions[choice]
}

function playOneRound(playerSelection, computerSelection) {
  let finalMessage = "The computer won 😔";
  let winner = "computer"
  if (
    playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "scissors" && computerSelection == "paper" ||
    playerSelection == "paper" && computerSelection == "rock"
  ) {
    finalMessage = "You won 😊"
    winner = "player"
  }
  alert(finalMessage)
}

let playerSelection = null;
while (playerSelection == null) {
  let playerInput = prompt("Choose one:", "rock, paper, or scissors");
  if (moveOptions.includes(playerInput)) {
    playerSelection = playerInput;
  } else {
    alert("That's not an option! Please choose rock, paper, or scissors.");
  };
};

playOneRound(playerSelection, getComputerChoice())