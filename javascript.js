function game(){
   for (let i = 0;i<5;i++){
    let playerSelection = prompt("Choose your weapon: Rock, Paper, Scissors").toLowerCase();
    
    while(
        playerSelection !== "rock" &&
        playerSelection !== "paper" &&
        playerSelection !== "scissors" 
    ) {
        playerSelection = prompt("Please enter a valid weapon!").toLowerCase();
    }
        playRound(playerSelection,getComputerChoice());
   }
}
function getComputerChoice() {
    let options = { 1: "rock", 2: "paper", 3: "scissors" };
  
    return options[Math.floor(Math.random() * 3) + 1];
  }



let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    if(playerSelection === "rock" && computerSelection==="paper"){
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        computerScore++;
    }else if(playerSelection === "paper" && computerSelection==="scissors"){
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        computerScore++;
    }else if(playerSelection === "scissors" && computerSelection==="rock"){
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        computerScore++;
    }else if(playerSelection === "rock" && computerSelection==="scissors"){
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        playerScore++;
    }else if(playerSelection === "scissors" && computerSelection==="paper"){
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        playerScore++;
    }else if(playerSelection === "paper" && computerSelection==="rock"){
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        playerScore++;
    }else if(playerSelection ===  computerSelection){
        console.log(`It's a tie!`);
    }
    return computerScore;
    return playerScore;
    
}
  const computerSelection = getComputerChoice();
  console.log(game());