function getComputerChoice(){
    choices=['rock','paper','scissors']
    return choices[Math.floor(Math.random()*3)]
}
player=0
computer=0
count=0
function playRound(playerSelection, computerSelection) {
    // your code here!
    
    if(playerSelection.toLowerCase()=='rock'){
        if(computerSelection.toLowerCase()=='scissors'){
            console.log('You WIN!')
            player++
        }
        else{
            console.log('YOu Lose!')
            computer++
        }
    }
    else if(playerSelection.toLowerCase()=='paper'){
        if(computerSelection.toLowerCase()=='rock'){
            console.log('You WIN!')
            player++
        }
        else{
            console.log('YOu Lose!')
            computer++
        }
    }
    else if(playerSelection.toLowerCase()=='scissors'){
        if(computerSelection.toLowerCase()=='paper'){
            console.log('You WIN!')
            player++
        }
        else{
            console.log('YOu Lose!')
            computer++
        }
    }
    else{
        return -1
    }
    count++
    if(count==5){
        player >computer ? announce('player won the tournament') : player<computer? announce('computer won the tournament'): announce('The tornament ends in a Draw!')
    }
  }
const rock=document.querySelector('#rock')
const paper=document.querySelector('#paper')
const scissors=document.querySelector('#scissors')

rock.addEventListener('click',()=> playRound(getComputerChoice(),'rock'))
paper.addEventListener('click',()=> playRound(getComputerChoice(),'paper'))
scissors.addEventListener('click',()=> playRound(getComputerChoice(),'scissors'))

function announce(winner){
    const container=document.querySelector('body')
    const div=document.createElement('div')
    div.textContent=winner
    container.appendChild(div)
}