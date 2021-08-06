
function playRound(playerSelection, computerSelection) {
    // Runs a single round of the game, playerSelection is case-insensitive

    // Nested "switch..." statements were used as I believe they would be a lot more logical to read
    // There might be a better / more optimized solution
    let decision = ""

    switch(playerSelection.toLowerCase()) {
        case "rock":
            switch(computerSelection){
                case "rock":
                    decision = "Tie"
                    break;
                case "paper":
                    decision = "Lose"
                    break;
                case "scissors":
                    decision = "Win"
                    break;
            }
            break;
        case "paper":
            switch(computerSelection){
                case "rock":
                    decision = "Win"
                    break;
                case "paper":
                    decision = "Tie"
                    break;
                case "scissors":
                    decision = "Lose"
                    break;
            }
            break;
        case "scissors":
            switch(computerSelection){
                case "rock":
                    decision = "Lose"
                    break;
                case "paper":
                    decision = "Win"
                    break;
                case "scissors":
                    decision = "Tie"
                    break;
            }
            break;
    }
    return decision;
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

function createMessage(playerSelection, computerSelection, decision){
    message = ""
    switch(decision) {
        case "Win":
            message = `You Win! ${playerSelection} beats ${computerSelection}`
            break;
        case "Tie":
            message = "It's a tie! No one wins"
            break;
        case "Lose":
            message = `You Lose! ${computerSelection} beats ${playerSelection}`
            break;
    }
    return message;
}

function tallyWinsLosses(wins, losses){
    message = ""
    if (wins > losses) {
        message = `You won the Game! Score: ${wins} - ${losses}; with ${5 -(wins + losses)} Ties`
    } else if (wins < losses) {
        message = `You lost the Game! Score: ${wins} - ${losses}; with ${5 -(wins + losses)} Ties`
    } else {
        message = `You tied the Game! Score: ${wins} - ${losses}; with ${5 -(wins + losses)} Ties`
    }
    return message;
}

const btns = document.querySelectorAll('.selection');
btns.forEach(btn => btn.addEventListener('click', (e)=>{
    playerSelection = e.target.id;
    computerSelection = computerPlay();
    decision = playRound(playerSelection, computerSelection);
    console.log(decision)
}));