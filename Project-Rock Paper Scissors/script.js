// To run JavaScript in VS code press f1 then select/type Run Code, or shortcut (Control + Alt + N)

let playerWinsCount = 0;
let computerWinsCount = 0;

// A function that generates the computer's choice
function computerPlay(){
    const moves = ['rock', 'paper', 'scissors'];
    const computerSelection = moves[Math.floor(Math.random() * moves.length)];

    return computerSelection
}
// A function that plays one single round
function playRound(playerSelection) {
    let computerSelection = computerPlay();
    if (computerSelection === 'rock'){
        switch(playerSelection){
            case 'rock':
            return 'It\'s a tie! Both players picked rock.'
            case 'paper':
            playerWinsCount++; 
            return 'You win! Paper beats rock.'
            case 'scissors':
            computerWinsCount++;
            return 'You lose! Rock beats scissors.'

        }
    }
    else if (computerSelection === 'paper'){
        switch(playerSelection){
            case 'rock':
            return 'You lose! Paper beats rock.'
            computerWinsCount++;
            case 'paper':
            return 'It\'s a tie! Both players picked paper.'
            case 'scissors':
            playerWinsCount++; 
            return 'You win! Scissors beats paper.'

        }
    }
    else if (computerSelection === 'scissors'){
        switch(playerSelection){
            case 'rock':
            return 'You win! Rock beats scissors.'
            playerWinsCount++; 
            case 'paper':
            return 'You lose! Scissors beats paper.'
            computerWinsCount++;
            case 'scissors':
            return 'It\'s a tie! Both players picked scissors.'

        }
    }
  }
// A function that plays 5 rounds and returns the winner and the score
function game(playerSelection) {
    if(playerWinsCount + computerWinsCount >= 5){
        return
    }
    else {
        playRound(playerSelection)
        if(playerWinsCount + computerWinsCount < 5) {
            return
        }
    else{
        if(playerWinsCount > computerWinsCount) {
            // playerWinsCount = computerWinsCount = 0;
            return 'Your score: ' + playerWinsCount + 'Opponent\'s score: ' + computerWinsCount + 'You won the game, Congratulations!'; 
            }
        else if(playerWinsCount < computerWinsCount) {
            // playerWinsCount = computerWinsCount = 0;
            return 'Your score: ' + playerWinsCount + 'Opponent\'s score: ' + computerWinsCount + 'You lost the game, better luck next time.'; 
            }
        else {
            // playerWinsCount = computerWinsCount = 0;
            return 'Your score: ' + playerWinsCount + 'Opponent\'s score: ' + computerWinsCount + 'It\'s a draw, refresh to try again.'; 
            }
        }
    }
}

// let playerSelection = prompt("What's your move? (rock/paper/scissors)")
// .toLowerCase() changes userinput string to all lower case. WOW!
const playerSelection = "RoCk".toLowerCase();
console.log(game(playerSelection));
