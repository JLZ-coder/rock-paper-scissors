const VALID_CHOICES = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    let randomChoice = Math.floor(Math.random() * VALID_CHOICES.length);
    return VALID_CHOICES[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    
    if (typeof playerSelection == "string") {
        playerSelection = playerSelection.slice(0,1).toUpperCase() + playerSelection.toLowerCase().slice(1);
    }
    else {
        return `Choose between ${VALID_CHOICES}`;
    }

    return evaluateChoices(playerSelection, computerSelection);
}

function evaluateChoices(playerSelection, computerSelection) {

    let roundResult = "LOSE";
    let returnPhrase = "";

    
    if (playerSelection == computerSelection) {
        roundResult = "DRAW";
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
            roundResult = "WIN";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
            roundResult = "WIN";
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
            roundResult = "WIN";
    }


    if (roundResult == "WIN") {
        returnPhrase = `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (roundResult == "LOSE") {
        returnPhrase = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else {
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

game(5);