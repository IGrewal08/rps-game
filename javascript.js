let humanScore = 0;
let computerScore = 0;
let round = 1;

const game_status = document.querySelector(".status");

function getcomputerChoice() {

    const choices = ["Rock", "Paper", "Scissors"];

    let randNum = Math.floor(Math.random() * choices.length);

    return choices[randNum];
}

function getHumanChoice() {

    const buttons = document.querySelectorAll(".buttons");

    buttons.forEach((button) => {

        button.addEventListener("click", (event) => {

            const clickedId = event.target;

            if (clickedId.id === "Rock") {
                playRound("Rock");
            } else if (clickedId.id === "Paper") {
                playRound("Paper");
            } else {
                playRound("Scissors");
            }

        });
    });
}

function playRound(humanChoice) {

    if (humanScore === 5 || computerScore === 5) {
        alert("GAME OVER!");
    } else {
        const computerSelection = getcomputerChoice();

        if (humanChoice  === computerSelection) {
            game_status.textContent = `You drew! ${humanChoice} matches ${computerSelection}.`;
        } else if ((humanChoice === "Rock" && computerSelection === "Scissors") || (humanChoice === "Paper" && computerSelection === "Rock") || (humanChoice === "Scissors" && computerSelection === "Paper")) {
            game_status.textContent = `You won! ${humanChoice} beats ${computerSelection}.`;
            humanScore++;
        } else {
            game_status.textContent = `You lost! ${humanChoice} loses to ${computerSelection}.`;
            computerScore++;
        }
        document.querySelector("#player_choice").textContent = humanChoice;
        document.querySelector("#computer_choice").textContent = computerSelection;
    
        round++;
        document.querySelector(".round").textContent = `${round}`;
        document.querySelector("#player_score").textContent = `Player Score ${humanScore}`;
        document.querySelector("#computer_score").textContent = `Computer Score ${computerScore}`;
    }
}

getHumanChoice();