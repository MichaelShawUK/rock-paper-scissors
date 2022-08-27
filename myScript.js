function getComputerChoice() {

    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {

    let invalidInput = true;
    let playerChoice = '';

    while (invalidInput) {

        playerChoice = prompt('Player\'s Choice: ').toLowerCase();
        if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
            invalidInput = false;
        }
    }
    return playerChoice;
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

function game(rounds) {

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < rounds; i++) {

        let result = playRound(getPlayerChoice(), getComputerChoice());
        console.log(result);
        result = result.charAt(4);
        if (result === 'W') playerScore++;
        if (result === 'L') computerScore++;
    }
    if (playerScore === computerScore) {
        return `Game Tied! Player Score: ${playerScore}, Computer Score: ${computerScore}`;
    } else {
        return (playerScore > computerScore) ? `You Win! Player Score: ${playerScore}, Computer Score: ${computerScore}` : `You Lose! Player Score: ${playerScore}, Computer Score: ${computerScore}`;
    }
}

console.log(game(3));