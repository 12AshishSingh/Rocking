const systemChoice = document.getElementById('System-choice');
const userChoice = document.getElementById('User-choice');
const Result = document.getElementById('Result-display');
let userResult
let systemResult
let outputResult
const possibleChoices = document.querySelectorAll('button');//take all buttons
// console.log(possibleChoices);
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
userResult = e.target.id;
userChoice.innerHTML = userResult;
RandomSystemInput()
resultDisplay()
}))//run for each on every button

function RandomSystemInput(){
const randomNumber = Math.floor(Math.random() * 3) +1;
// console.log(randomNumber)
if(randomNumber === 1){
systemResult = 'rock'
}
if(randomNumber === 2){
    systemResult = 'scissors'
    }   
if(randomNumber === 3){
    systemResult = 'Paper'
    }
    systemChoice.innerHTML = systemResult;
}

function resultDisplay(){
    if(systemResult === userResult){
        outputResult = `It's a draw`
    }
    if(systemResult === 'rock' && userResult === 'paper'){
        outputResult = `You win`
    }
    if(systemResult === 'rock' && userResult === 'scissors'){
        outputResult = `OOP'S you lost it!!!`
    }
    if(systemResult === 'paper' && userResult === 'scissors'){
        outputResult = `You win`
    }
    if(systemResult === 'paper' && userResult === 'rock'){
        outputResult = `OOP'S you lost it!!!`
    }
    if(systemResult === 'scissors' && userResult === 'rock'){
        outputResult = `You win`
    }
    if(systemChoice === 'scissors' && userResult === 'paper'){
        outputResult = `OOP'S you lost it!!!`
    }
    Result.innerHTML= outputResult;
}