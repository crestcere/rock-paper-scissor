let rock = "rock";
let paper = "paper";
let scissor = "scissor";
let computerSelection;
let playerSelection;

function computerPlay() {
    let desicion = Math.floor(Math.random() * 3) + 1;
    computerSelection = (desicion == 1) ? rock : (desicion == 2) ? paper : scissor;
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result = 0;
    switch (playerSelection) {
        case rock:
            switch (computerSelection) {
                case rock:
                    result = 0;
                    break;
                case paper:
                    result = -1;
                    break;
                case scissor:
                    result = 1;
                    break;
            }
        case paper:
            switch (computerSelection) {
                case rock:
                    result = 1;
                    break;
                case paper:
                    result = 0;
                    break;
                case scissor:
                    result = -1;
                    break;
            }
        case scissor:
            switch (computerSelection) {
                case rock:
                    result = -1;
                    break;
                case paper:
                    result = 1;
                    break;
                case scissor:
                    result = 0;
                    break;
            }
    }
    // switch (result) {
    //     case -1:
    //         alert("You Lose! " + computerSelection + " beats " + playerSelection);
    //         break;
    //     case 0:
    //         alert("Draw!")
    //         break;
    //     case 1:
    //         alert("You Win! " + playerSelection + " beats " + computerSelection);
    //         break;
    // }
    return result;
}

function game() {
    let pscore = 0;
    let cscore = 0;
    for (let i = 0; i < 5; i++) {
        computerPlay();
        playerSelection = prompt("Rock - Paper - Scissor", "Type");
        let a = playRound(playerSelection, computerSelection);
        (a == 1) ? pscore += 1 : (a == -1) ? cscore -= 1 : cscore += 0;
        // alert(a);
    }
    switch (pscore) {
        case pscore > cscore:
            alert("You Win! This Game!");
            break;
        case pscore == cscore:
            alert("It's draw. You did not win or lose this game!");
            break;
        default:
            alert("You Lost! You suck at this game!");
            break;
    }
}

game();