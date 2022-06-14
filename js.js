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
    // playerSelection = playerSelection.toLowerCase();
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
    return result;
}

function game() {
    let pscore = 0;
    let cscore = 0;
    // let a = playRound(playerSelection, computerSelection);

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (pscore == 5 || cscore == 5) {
                pscore = 0;
                cscore = 0;
                paragraph.innerText = ""
            }
            switch (button.id) {
                case "button1":
                    playerSelection = rock;
                    break;
                case "button2":
                    playerSelection = paper;
                    break;
                default:
                    playerSelection = scissor;
                    break;
            }
            computerPlay();
            (playRound(playerSelection, computerSelection) == 1) ? (pscore += 1, paragraph.innerText = "You win this round! " + pscore + " vs " + cscore): (playRound(playerSelection, computerSelection) == -1) ? (cscore += 1, paragraph.innerText = "You lost this round! " + pscore + " vs " + cscore) : (cscore += 0, paragraph.innerText = "Draw this round! " + pscore + " vs " + cscore);
            if (pscore == 5 || cscore == 5) {
                switch (true) {
                    case pscore > cscore:
                        paragraph.innerText = "You win this Game! Your Score: " + pscore + " vs " + cscore;
                        break;
                    case pscore == cscore:
                        paragraph.innerText = "It's draw. You did not win or lose this game! Your Score: " + pscore + " vs " + cscore;
                        break;
                    default: 
                        paragraph.innerText = "You Lost! You suck at this game! Your Score: " + pscore + " vs " + cscore;
                        break;
                }      
            }
        })
    })

    /* button1.addEventListener("click", () => {
        if (pscore == 5 || cscore == 5) {
            pscore = 0;
            cscore = 0;
            paragraph.innerText = ""
        }
        playerSelection = rock;
        computerPlay();
        (playRound(playerSelection, computerSelection) == 1) ? (pscore += 1, paragraph.innerText = "You win this round! " + pscore + " vs " + cscore): (playRound(playerSelection, computerSelection) == -1) ? (cscore += 1, paragraph.innerText = "You lost this round! " + pscore + " vs " + cscore) : (cscore += 0, paragraph.innerText = "Draw this round! " + pscore + " vs " + cscore);
        if (pscore == 5 || cscore == 5) {
            switch (true) {
                case pscore > cscore:
                    paragraph.innerText = "You win this Game! Your Score: " + pscore + " vs " + cscore;
                    break;
                case pscore == cscore:
                    paragraph.innerText = "It's draw. You did not win or lose this game! Your Score: " + pscore + " vs " + cscore;
                    break;
                default: 
                    paragraph.innerText = "You Lost! You suck at this game! Your Score: " + pscore + " vs " + cscore;
                    break;
            }      
        }
    });
    button2.addEventListener("click", () => {
        if (pscore == 5 || cscore == 5) {
            pscore = 0;
            cscore = 0;
            paragraph.innerText = ""
        }
        playerSelection = paper;
        computerPlay();
        (playRound(playerSelection, computerSelection) == 1) ? (pscore += 1, paragraph.innerText = "You win this round! " + pscore + " vs " + cscore): (playRound(playerSelection, computerSelection) == -1) ? (cscore += 1, paragraph.innerText = "You lost this round! " + pscore + " vs " + cscore) : (cscore += 0, paragraph.innerText = "Draw this round! " + pscore + " vs " + cscore);
        if (pscore == 5 || cscore == 5) {
            switch (true) {
                case pscore > cscore:
                    paragraph.innerText = "You Win! This Game! Your Score: " + pscore + " vs " + cscore;
                    break;
                case pscore == cscore:
                    paragraph.innerText = "It's draw. You did not win or lose this game! Your Score: " + pscore + " vs " + cscore;
                    break;
                default: 
                    paragraph.innerText = "You Lost! You suck at this game! Your Score: " + pscore + " vs " + cscore;
                    break;
            }      
        }
    });
    button3.addEventListener('click', () => {
        if (pscore == 5 || cscore == 5) {
            pscore = 0;
            cscore = 0;
            paragraph.innerText = ""
        }
        playerSelection = scissor;
        computerPlay();
        (playRound(playerSelection, computerSelection) == 1) ? (pscore += 1, paragraph.innerText = "You win this round! " + pscore + " vs " + cscore): (playRound(playerSelection, computerSelection) == -1) ? (cscore += 1, paragraph.innerText = "You lost this round! " + pscore + " vs " + cscore) : (cscore += 0, paragraph.innerText = "Draw this round! " + pscore + " vs " + cscore);
        if (pscore == 5 || cscore == 5) {
            switch (true) {
                case pscore > cscore:
                    paragraph.innerText = "You Win! This Game! Your Score: " + pscore + " vs " + cscore;
                    break;
                case pscore == cscore:
                    paragraph.innerText = "It's draw. You did not win or lose this game! Your Score: " + pscore + " vs " + cscore;
                    break;
                default: 
                    paragraph.innerText = "You Lost! You suck at this game! Your Score: " + pscore + " vs " + cscore;
                    break;
            }     
        }
    }); */

    // console.log(a);
    
    // (a == 1) ? pscore += 1 : (a == -1) ? cscore -= 1 : cscore += 0;
    
    /* for (let i = 0; i < 5; i++) {
        computerPlay();
        // playerSelection = prompt("Rock - Paper - Scissor", "Type");
        button1.addEventListener("click", () => {
            playerSelection = rock;
        });
        button1.addEventListener("click", () => {
            paragraph.textContent = playerSelection + i;
        })
        button2.addEventListener("click", () => {
            playerSelection = paper;
        });
        button2.addEventListener("click", () => {
            paragraph.textContent = playerSelection;
        });
        button3.addEventListener('click', () => {
            playerSelection = "scissor";
        });
        button3.addEventListener("click", () => {
            paragraph.textContent = playerSelection;
        });
        
        let a = playRound(playerSelection, computerSelection);
        (a == 1) ? pscore += 1 : (a == -1) ? cscore -= 1 : cscore += 0;
        // alert(a);
    } */
    
    /* switch (pscore) {
        case pscore > cscore:
            paragraph.innerText = "You Win! This Game! Your Score: " + pscore + " vs " + cscore;
            break;
        case pscore == cscore:
            paragraph.innerText = "It's draw. You did not win or lose this game! Your Score: " + pscore + " vs " + cscore;
            break;
        case pscore < cscore:
            paragraph.innerText = "You Lost! You suck at this game! Your Score: " + pscore + " vs " + cscore;
            break;
        default: 
            paragraph.innerText = "Result will be shown here!"
    } */
}

const div1 = document.querySelector("#div1");

const button1 = document.querySelector("#button1");
button1.textContent = "Rock!";
// button1.addEventListener("click", () => {
//     playerSelection = rock;
// });

const button2 = document.querySelector("#button2");
button2.textContent = "Paper!";
// button2.addEventListener("click", () => {
//     playerSelection = paper;
// });

const button3 = document.querySelector("#button3");
button3.textContent = "Scissors!";
// button3.addEventListener('click', () => {
//     playerSelection = "scissor";
// });
// button3.addEventListener("click", () => {
//     paragraph.textContent = playerSelection;
// })

const buttons = document.querySelectorAll("button");

const display = document.createElement("div");
display.style.border = "1px solid black";

const paragraph = document.createElement("p");
paragraph.style.fontSize = "20px"
// paragraph.innerText = result;


div1.appendChild(display);
display.appendChild(paragraph);



/* const buttons = document.querySelectorAll("button");
buttons.forEach((button => {
    button.addEventListener('click', () => {
        button.id
        console.log(playerSelection = rock, paper, scissor);
    })
})) */

game();
