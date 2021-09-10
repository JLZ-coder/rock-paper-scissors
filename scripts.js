const VALID_CHOICES = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    let randomChoice = Math.floor(Math.random() * VALID_CHOICES.length);
    return VALID_CHOICES[randomChoice];
}

console.log(computerPlay());