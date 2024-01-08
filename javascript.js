const optionsArray = ["rock", "paper", "scissors"];

function getComputerChoice(optionsArray){
    const randomIndex = Math.floor(Math.random() * optionsArray.length);
    return optionsArray[randomIndex];
};

const computerSelection = getComputerChoice(optionsArray);
const playerSelection = prompt("Enter your choice: Rock, Papers or Scissors? ").toLowerCase();


function singleRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        console.log("It's a tie!");} //the tie situation
    else if (playerSelection === optionsArray[0] && computerSelection === optionsArray[1]){
        console.log("You lose! Paper beats rock");}
    else if (playerSelection === optionsArray[0] && computerSelection === optionsArray[2]){
        console.log("You won! Rock beats scissors");}
    else if (playerSelection === optionsArray[1] && computerSelection === optionsArray[0]){
        console.log("You won! Paper beats rock!");}
    else if (playerSelection === optionsArray[1] && computerSelection === optionsArray[2]){
        console.log("You lost! Scissors beats paper!");} 
    else if (playerSelection === optionsArray[2] && computerSelection === optionsArray[0]){
        console.log("You lost! Rock beats scissors!");} 
    else if (playerSelection === optionsArray[2] && computerSelection === optionsArray[1]){
        console.log("You won! Scissors beats paper!");}   
    else {
        console.log("Wrong selection! try again");
    }
}

singleRound(playerSelection, computerSelection);