
function playRound(playerSelection, computerSelection) {
    // Runs a single round of the game, playerSelection is case-insensitive


    // Nested "switch..." statements were used as I believe they would be a lot more logical to read
    // There might be a better / more optimized solution
    let message = ""
    switch(playerSelection.toLowerCase()) {
        case "rock":
            switch(computerSelection){
                case "rock":
                    message = "Tie! No one wins"
                    break;
                case "paper":
                    message = "You Lose! Paper beats Rock"
                    break;
                case "scissors":
                    message = "You Win! Rock beats Scissors"
                    break;
            }
            break;
        case "paper":
            switch(computerSelection){
                case "rock":
                    message = "You Win! Paper beats Rock"
                    break;
                case "paper":
                    message = "Tie! No one wins"
                    break;
                case "scissors":
                    message = "You Lose! Scissors beats Paper"
                    break;
            }
            break;
        case "scissors":
            switch(computerSelection){
                case "rock":
                    message = "You Lose! Rock beats Scissors"
                    break;
                case "paper":
                    message = "You Win! Scissors beats Paper"
                    break;
                case "scissors":
                    message = "Tie! No one wins"
                    break;
            }
            break;
    }
    return message
}

function computerPlay() {
    // Will randomly return either 'rock', 'paper', or 'scissors'
    let selected = "";

    switch(Math.floor(Math.random() * 3)){
        case 0:
            selected = "rock";
            break;
        case 1:
            selected = "paper";
            break;
        case 2:
            selected = "scissors";
            break;
    }
    return selected;
}

const playerSelection = prompt();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))