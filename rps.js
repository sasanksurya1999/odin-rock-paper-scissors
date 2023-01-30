function getComputerChoice(){
    choices=['rock','paper','scissors']
    return choices[Math.floor(Math.random()*3)]
}
player=0
computer=0
count=5
const roundresult=document.querySelector('#round-result');
function playRound(playerSelection, computerSelection) {
    // your code here!
    
    if(playerSelection.toLowerCase()=='rock'){
        if(computerSelection.toLowerCase()=='scissors'){
            roundresult.textContent=`You WIN! rounds remaining =${count}`
            player++
        }
        else{
            roundresult.textContent =`YOu Lose! rounds remaining =${count}`
            computer++
        }
    }
    else if(playerSelection.toLowerCase()=='paper'){
        if(computerSelection.toLowerCase()=='rock'){
            roundresult.textContent=`You WIN! rounds remaining =${count}`
            player++
        }
        else{
            roundresult.textContent =`YOu Lose! rounds remaining =${count}`
            computer++
        }
    }
    else if(playerSelection.toLowerCase()=='scissors'){
        if(computerSelection.toLowerCase()=='paper'){
            roundresult.textContent=`You WIN! rounds remaining =${count}`
            player++
        }
        else{
            roundresult.textContent =`YOu Lose! rounds remaining =${count}`
            computer++
        }
    }
    else{
        return -1
    }
    
    if(count==0){
        player >computer ? announce('player won the tournament') : player<computer? announce('computer won the tournament'): announce('The tornament ends in a Draw!')
    }
    count--
  }
const rock=document.querySelector('#rock')
const paper=document.querySelector('#paper')
const scissors=document.querySelector('#scissors')

rock.addEventListener('click',()=> playRound(getComputerChoice(),'rock'))
rock.addEventListener('mouseover',onHover)
rock.addEventListener('mouseout',onOut)
paper.addEventListener('click',()=> playRound(getComputerChoice(),'paper'))
paper.addEventListener('mouseover',onHover)
paper.addEventListener('mouseout',onOut)
scissors.addEventListener('click',()=> playRound(getComputerChoice(),'scissors'))
scissors.addEventListener('mouseover',onHover)
scissors.addEventListener('mouseout',onOut)



function onHover(e){
    
    e.target.classList.add('hovered');
    e.target.style.pointerEvents='pointer'
}
function onOut(e){
    e.target.classList.remove('hovered')
}
function announce(winner){
    roundresult.textContent=winner
}