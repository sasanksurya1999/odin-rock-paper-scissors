function getComputerChoice(){
    choices=['rock','paper','scissors']
    return choices[Math.floor(Math.random()*3)]
}
player=0
computer=0
function playRound(playerSelection, computerSelection) {
    // your code here!
    
    if(playerSelection.toLowerCase()=='rock'){
        if(computerSelection.toLowerCase()=='scissors'){
            player+=1
        }
        else{
            computer+=1
        }
    }
    else if(playerSelection.toLowerCase()=='paper'){
        if(computerSelection.toLowerCase()=='rock'){
            player+=1
        }
        else{
            computer+=1
        }
    }
    else if(playerSelection.toLowerCase()=='scissors'){
        if(computerSelection.toLowerCase()=='paper'){
            player+=1
        }
        else{
            computer+=1
        }
    }
    else{
        return -1
    }
  }



function game(){
    for(let i=0;i<5;i++){
        let playerSelection=prompt('')
        let computerSelection=getComputerChoice()
        if(playRound(playerSelection, computerSelection)==-1){
            i--
        }
        console.log(computerSelection)
        console.log(player,computer)
    }
    
    player==computer? console.log('Draw') : player>computer? console.log('You Win!') : console.log('You Lose!')
}
game()