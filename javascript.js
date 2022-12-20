
// function to get a random choice from the computer
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3)
    let choice = ""

    if (randomNumber === 0) {
        choice = 'Rock'
    } else if (randomNumber === 1) {
        choice = 'Paper'
    } else {
        choice = 'Scissors'
    }

    return choice
}

// function to ask the user his choice
function playerSelection() {
    const myChoice = document.querySelectorAll(".choice");
    myChoice.forEach((choice) => {
        choice.addEventListener('click', () => {
            let chosen = choice.textContent;
            return chosen
        
    })
});
}

// function to play a round of Rock, Paper, or Scissors
function playRound(playerSelection, computerSelection) {

    let playSel = playerSelection.toLowerCase()
    let compSel = computerSelection.toLowerCase()
    let verdict = ""

    if (playSel === 'rock' && compSel === 'paper') {
        verdict = "You lose! Paper beats Rock"
    } else if (playSel === 'paper' && compSel === 'rock') {
        verdict = "You win! Paper beats Rock"
    } else if (playSel === 'paper' && compSel === 'scissors') {
        verdict = "You lose! Scissors beats Paper"
    } else if (playSel === 'scissors' && compSel === 'paper') {
        verdict = "You win! Scissors beats Paper"
    } else if (playSel === 'scissors' && compSel === 'rock') {
        verdict = "You lose! Rock beats Scissors"
    } else if (playSel === 'rock' && compSel === 'scissors') {
        verdict = "You win! Rock beats Scissors"
    } else {
        verdict = "No one wins!"
    }

    return verdict
}

function display() {
    const container = document.querySelector('.container');
    const div = document.createElement('div');
    div.classList.add('display');
    container.append(div);

}

function roundWinner(verdict) {
    const div = document.querySelector('.display');
    div.textContent = verdict
}

// function to start a game of Rock, Paper, or Scissors with a total of 5 rounds
function game() {
    display()
    let playerWins = 0
    let computerWins = 0

    const myChoice = document.querySelectorAll(".choice");
    myChoice.forEach((choice) => {
        choice.addEventListener('click', () => {
            let verdict = playRound(choice.textContent, getComputerChoice())
            if (verdict.slice(0, 7) === "You win") {
                playerWins++
            } else if (verdict.slice(0, 8) === "You lose") {
                computerWins++
            }
            if (playerWins == 5) {
                let message = 'You win the game with 5 points!';
                roundWinner(message);
                playerWins = 0
                computerWins = 0
            } else if (computerWins == 5) {
                let message = 'You lose, computer has 5 points.';
                roundWinner(message);
                playerWins = 0
                computerWins = 0
            } else {
                let message = verdict + " " + playerWins + "-" + computerWins
                roundWinner(message);
            }

        })
    })
}

game()