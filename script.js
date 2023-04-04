const moveOptions = ["rock", "paper", "scissors"];

const buttonsContainer = document.querySelector('.player-selections');

const roundResultField = document.querySelector('.round-result');
const gameResultField = document.querySelector('.game-result')

const selectionButtons = document.querySelectorAll(".selection-button");

const playerScoreCard = document.querySelector(".player-score > p");
const computerScoreCard = document.querySelector(".computer-score > p");

let playerScore = 0;
let computerScore = 0;

for (button of selectionButtons) {
  button.addEventListener('click', function(e) {
    tryGameReset()
    let result = playOneRound(this.id, getComputerChoice());
    roundResultField.innerHTML = result;
    if (playerScore >= 5 || computerScore >= 5) {
      announceWinner()
    };
  });
}

function tryGameReset() {
  if (playerScore >= 5 || computerScore >= 5) {
    roundResultField.textContent = "";
    gameResultField.textContent = "";
    playerScore = 0;
    computerScore = 0;
  }
}

function announceWinner() {
  let gameEndMessage = "";
  if (playerScore >= 5) {
    gameResultField.textContent = "Congratulations, you won!";
  } else {
    gameResultField.textContent =  "Oh, no! The computer beat you.";
  };
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3)
  return moveOptions[choice]
}

function playOneRound(playerSelection, computerSelection) {
  let finalMessage = "";
  
  if (playerSelection == computerSelection){
    finalMessage = "It's a draw ✏️";

  } else if (
    playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "scissors" && computerSelection == "paper" ||
    playerSelection == "paper" && computerSelection == "rock"
  ) {
    finalMessage = "You won this round 😊";
    playerScore += 1;
  } else {
    finalMessage = "You lost that round 😔";
    computerScore += 1;
  }

  updateScores()
  return finalMessage + `<br>${playerSelection} vs. ${computerSelection}`;
}

function updateScores() {
  playerScoreCard.textContent = playerScore;
  computerScoreCard.textContent = computerScore;
}



// function game() {
//   let playerWins = 0;
//   let computerWins = 0;

//   while (playerWins < 5 && computerWins < 5) {
//     let gameResult = playOneRound(getPlayerSelection(), getComputerChoice());
//     if (gameResult == 1) {
//       playerWins ++;
//     } else if (gameResult == -1) {
//       computerWins ++;
//     }
//   }

//   let endingMessage = playerWins > computerWins ? 
//     "You won the game!" : "You lost the game.";
//   return endingMessage
// }
