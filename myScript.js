function getComputerChoice() {

    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {

    let playerChoice = prompt('Player\'s Choice: ').toLowerCase();
    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        return playerChoice;
    } else {
        console.log('Invalid Choice');
        getPlayerChoice();
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return `You Tie! ${playerSelection} draws with ${computerSelection}`;
    }
    if (playerSelection === 'rock') {
        return (computerSelection === 'scissors') ? `You Win! ${playerSelection} beats ${computerSelection}` : `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    if (playerSelection === 'paper') {
        return (computerSelection === 'rock') ? `You Win! ${playerSelection} beats ${computerSelection}` : `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    if (playerSelection === 'scissors') {
        return (computerSelection === 'paper') ? `You Win! ${playerSelection} beats ${computerSelection}` : `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}
