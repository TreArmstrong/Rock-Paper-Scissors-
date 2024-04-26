let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    const choices = ['rock', 'paper', 'scissors'];
    // Generate a random choice for the computer
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = '';
// If else statements for the different outcomes of RPS
    if (playerChoice === computerChoice) {
        result = "It's a tie";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "You win";
        playerScore++;
    } else {
        result = "You lose";
        computerScore++;
    }
// Have to get element by ID's set and method inner text to recieve the input of player
    document.getElementById('result').innerText = `You chose ${playerChoice}, the computer chose ${computerChoice}. ${result}`;
    document.getElementById('playerScore').innerText = playerScore;
    document.getElementById('playerScore').innerText = playerScore;
}
