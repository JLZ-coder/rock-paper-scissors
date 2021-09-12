const VALID_CHOICES = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  let randomChoice = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (typeof playerSelection == "string") {
    playerSelection =
      playerSelection.slice(0, 1).toUpperCase() +
      playerSelection.toLowerCase().slice(1);
  } else {
    return `Choose between ${VALID_CHOICES}`;
  }

  return evaluateChoices(playerSelection, computerSelection);
}

function evaluateChoices(playerSelection, computerSelection) {
  let roundResult = "LOSE";
  let returnPhrase = "";

  if (playerSelection == computerSelection) {
    roundResult = "DRAW";
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    roundResult = "WIN";
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    roundResult = "WIN";
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    roundResult = "WIN";
  }

  if (roundResult == "WIN") {
    returnPhrase = `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (roundResult == "LOSE") {
    returnPhrase = `You lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    returnPhrase = `It's a tie ${playerSelection} equals ${computerSelection}`;
  }

  return returnPhrase;
}

function game(rounds) {
  let playerSelection;
  let computerSelection;

  for (let i = 1; i <= rounds; i++) {
    playerSelection = prompt(`Make your choice!(${VALID_CHOICES})`);
    computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}

const ROUNDS = 5;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const rpsButtons = [rockButton, paperButton, scissorsButton];

let resultDiv = document.querySelector("#results");

let computerWinCount = document.querySelector("#computerWinCount");
let playerWinCount = document.querySelector("#playerWinCount");


rpsButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (+playerWinCount.textContent == ROUNDS || +computerWinCount.textContent == ROUNDS) {
      resetGame();
      rockButton.textContent = "Rock";
      paperButton.textContent = "Paper";
      scissorsButton.textContent = "Scissors";
    }
    else {
      resultDiv.textContent = playRound(button.getAttribute("id"), computerPlay());

      let winCountIncremented = 0;

      if (resultDiv.textContent.startsWith("You win!")) {
        winCountIncremented = Number(playerWinCount.textContent) + 1;
        playerWinCount.textContent = winCountIncremented.toString();
      }
      else if (resultDiv.textContent.startsWith("You lose!")) {
        winCountIncremented = Number(computerWinCount.textContent) + 1;
        computerWinCount.textContent = winCountIncremented.toString();
      }
      
      if (+playerWinCount.textContent == ROUNDS) {
        resultDiv.textContent = "YOU WON!";
        changeButtonsText("NEW ROUND")

      }
      else if (+computerWinCount.textContent == ROUNDS) {
        resultDiv.textContent = "YOU LOST!";
        changeButtonsText("NEW ROUND")
      }
    }    
  })
});

function resetGame() {
  playerWinCount.textContent = "0";
  computerWinCount.textContent = "0";
  resultDiv.textContent = "WHO WILL WIN?";
}

function changeButtonsText(newText) {
  rpsButtons.forEach((button) => {
    button.textContent = newText;
  })
}




