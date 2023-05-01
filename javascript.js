let choicesRockPaperScissorGame = ['rock','paper','scissors'];
    
function getComputerChoice(){
    let randomArrayNumber = choicesRockPaperScissorGame[Math.floor(Math.random()*choicesRockPaperScissorGame.length)];
    console.log("Computer : "+randomArrayNumber);
}

function playRound(playerSelection, computerSelection) {
    if(playRound("paper","rock")){
        console.log("Paper beats ROCK!");
    } else if (playRound('paper','scissor')){
        console.log('Scissor beats PAPER!');
    }else if (playRound('rock','scissor')){
        console.log('Rock beats SCISSOR!');
    }else if (playRound('scissor','paper')){
        console.log('Scissor beats PAPER!');
    }else {
         console.log("draw");
    }
}
  const playerSelection= "rock";
  let pSelection = playerSelection.toLowerCase();
  console.log("Person : "+pSelection);
  const computerSelection = getComputerChoice();

  console.log(playRound(playerSelection, computerSelection));