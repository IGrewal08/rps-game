function getComputerChoice() {

    let randNum = Math.floor(Math.random() * 3);
    switch (randNum) {
        case 0:
            return("Rock");
        case 1:
            return("Paper");
        case 2:
            return("Scissor");
        default:
            return("error");
    }
}

function getHumanChoice() {
    return prompt("Enter guess here: ").toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playGame() {

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    function playRound(humanChoice, computerChoice) {

        let finalChoice = (humanChoice.charAt(0).toUpperCase() + humanChoice.substring(1));

        if (finalChoice  === computerChoice) {
            console.log(`You drew! ${finalChoice} matches ${computerChoice}.`);
        } else if ((finalChoice === "Rock" && computerChoice === "Scissor") || (finalChoice === "Paper" && computerChoice === "Rock") || (finalChoice === "Scissor" && computerChoice === "Paper")) {
            console.log(`You won! ${finalChoice} beats ${computerChoice}.`);
            humanScore++;
        } else {
            console.log(`You lost! ${finalChoice} loses to ${computerChoice}.`);
            computerScore++;
        }
    }

    console.log(humanScore);

}

for (let i = 0; i <= 4; i++) {
    playGame();
}