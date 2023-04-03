const moveOptions = ["rock", "paper", "scissors"];

const buttonsContainer = document.querySelector('.player-selections');

const results = document.createElement('p');
buttonsContainer.appendChild(results);

const selectionButtons = document.querySelectorAll(".selection-button");

const playerScoreCard = document.querySelector(".player-score > p");
const computerScoreCard = document.querySelector(".computer-score > p");

let playerScore = 0;
let computerScore = 0;

for (button of selectionButtons) {
  button.addEventListener('click', function(e) {
    let result = playOneRound(this.id, getComputerChoice());
    results.textContent = result;
    if (playerScore >= 5 || computerScore >= 5) console.log("reset the game");
  });
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3)
  return moveOptions[choice]
}

function playOneRound(playerSelection, computerSelection) {
  let finalMessage = "";
  
  if (playerSelection == computerSelection){
    finalMessage = "It's a draw!";

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
  return finalMessage + `\n${playerSelection} vs. ${computerSelection}`;
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
