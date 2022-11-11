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
    let choice = prompt("What do you choice?")
    return choice
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

// function to start a game of Rock, Paper, or Scissors with a total of 5 rounds
function game() {
    let playerWins = 0
    let computerWins = 0
    for (let i = 0; i < 5; i++) {
        let choice = playerSelection()
        let verdict = playRound(choice, getComputerChoice());

        if (verdict.slice(0, 7) === "You win") {
            playerWins++
        } else if (verdict.slice(0, 8) === "You lose") {
            computerWins++
        }

        alert(verdict)
        console.log(verdict, playerWins, computerWins)
    }

    if (playerWins > computerWins) {
        alert("You won the game!")
    } else if (playerWins > computerWins) {
        alert("You lost the game...")
    } else {
        alert("Fair match, equal scores.")
    }
}

game()