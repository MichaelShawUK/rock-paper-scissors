function getComputerChoice() {

    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

let playerScore = 0;
let cpuScore = 0;

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return `You Tie!`;
    }
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        return 'Player WINS!';
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        return 'Player WINS!';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        return 'Player WINS!';
    }
    else {
        cpuScore += 1;
        return 'CPU WINS!';
    }
}

const buttons = document.querySelectorAll('.playBtn');
const div = document.querySelector('#result');
const cpuSpan = document.querySelector('#cpu');
const playerSpan = document.querySelector('#player');
const playerScoreDisplay = document.querySelector('#playerScore');
const cpuScoreDisplay = document.querySelector('#CPUScore');
const winner = document.querySelector('#winner');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const cpu = getComputerChoice();
        const player = e.target.id;
        cpuSpan.textContent = cpu;
        playerSpan.textContent = player;
        div.textContent = playRound(player, cpu);
        playerScoreDisplay.textContent = playerScore;
        cpuScoreDisplay.textContent = cpuScore;
        if (playerScore === 5 || cpuScore === 5) {
            if (playerScore === 5) {
                winner.textContent = 'Player is the overall winner!'
            }
            else {
                winner.textContent = 'CPU is the overall winner!'
            }
        }
    })
})
