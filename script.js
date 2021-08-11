/* computerPlay function which will randomly return either 'rock', 'paper', or 'scissors' by
   accessing an array and choosing a random index.*/
function computerPlay() {
    // Array created to hold the potential values
    const compChoices = ['rock', 'paper', 'scissors'];
    // Return a random choice from the compChoices array
    return (compChoices[Math.floor(Math.random() * 3)]);
  }
  
   
  /* Checks the value of the playerSelection function against the computerSelection to see if equal (tie),
     if the player won (3 conditions), or if the player lost (all other values). */
  function playRound(playerSelection, computerSelection) {
    // If the player and computer values are the same return tie
    if (playerSelection === computerSelection) {
      return "Tied";
    }
    // Check if player won
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && (computerSelection === 'paper')) || (playerSelection === 'paper' && computerSelection === 'rock')) {
      return "You win";
      // If values are other, player lost
    } else {
      return "You lose";
    }
  }
  
  /* function to get playerSelection and return the value after validating the format is correct */
  function playerSubmission() {
    var playerSelection = prompt('Rock, Paper, or Scissor?').toString().toLowerCase();
    if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
      alert('That can not be used');
      playerSubmission();
    } 
      else {
        return playerSelection;
      }
  }
  
  function game() {
    var playerWins = 0;
    var computerWins = 0;
    // game function should run until a player has won 5 games
    while ((playerWins < 5) && (computerWins < 5)) {
      console.log('Computer has won: ' + computerWins + '. Player has won: ' + playerWins);
      playerSelection = playerSubmission();
      computerSelection = computerPlay();
      let result = playRound(playerSelection, computerSelection);
      if (result === 'You lose') {
        computerWins++;
        console.log(`Computer chose ${computerSelection}, you chose ${playerSelection}`);
      } else if (result  === 'You win') {
        playerWins++;
        console.log(`You chose ${playerSelection}, computer chose ${computerSelection}`);
      } else  {
        console.log('Tied! ' + 'Computer chose: ' + computerSelection + ' Player chose: ' + playerSelection);
      }
    }
  }
  game();
  