function getComputerChoice() {
    //random output of rock, paper, or scissors
    // return this output
    const choice = ['Rock', 'Paper', 'Scissors']; // Variable array to contain computer choices
    const randomChoice = Math.floor(Math.random() * choice.length); // Randomly choose an array item from choice variable
    const randomChoiceFinal = (randomChoice, choice[randomChoice]); // Picks a random choice 
    return randomChoiceFinal;
}
computer = getComputerChoice(); // Assigning a variable to the computer choice function

function getPlayerChoice() {
    playerInput = prompt("Enter Rock, Paper, Or Scissors!"); // Variable to get rock
    playerToLower = playerInput.toLowerCase(); // Converts players input to all lowercase
    playerSelection = playerToLower[0].toUpperCase() + playerToLower.substring(1); // Uppercases the first letter, then concats it with the rest of the string
    return playerSelection;
}
player = getPlayerChoice(); // Assigning a variable to the player choice function
compString = "Computer: "; // String to let user know who chose what
playString = "Player: "; // Same thing as compSring ^

let winCounter = 0; // Declaring counter for user's number of wins/losses
let lossCounter = 0;
let winner; // Declaring winner/loser console.log variables
let loser;
let tie = 0;
function round(computer, player) { // Function to determine winner of a round between user and computer
    if (player === 'Rock' && computer === 'Paper') { // Checks if player lost rock outcome
        loser = console.log("You lose! Paper beats Rock.");
        lossCounter++;
        return loser;
    }
    else if (player === 'Rock' && computer === 'Scissors') { // Checks if player won rock outcome
        winner = console.log("You win! Rock beats Scissors.");
        winCounter++;
        return winner;
    }
    else if (player === 'Paper' && computer === 'Scissors') { // Checks if player lost paper outcome
        loser = console.log("You lose! Scissors beats Paper.");
        lossCounter++;
        return loser;
    }
    else if (player === 'Paper' && computer === 'Rock') { // Checks if player won paper outcome
        winner = console.log("You win! Paper beats Rock.");
        winCounter++;
        return winner;
    }
    else if (player === 'Scissors' && computer === 'Rock') { // Checks if player lost scissors outcome
        loser = console.log("You lose! Rock beats Scissors");
        lossCounter++;
        return loser;
    }
    else if (player === 'Scissors' && computer === 'Paper') { // Checks if player won scissors outcome
        winner = console.log("You win! Scissors beats Paper.");
        winCounter++;
        return winner;
    }
    else {
        console.log("Tie!");	
        
    }
}
// Figure out what to do if user types something other than Rock, paper, scissors

console.log(compString + computer); // Prints our computer and compString so user can see who put what
console.log(playString + player); // Same as above but for player ^
round(computer, player);










//Psuedo for battle
/* 
Computer Vs Player input
if playerChoice === Rock && getComputerChoice() === 'Paper

*/














/// Junk code section: 
// function getPlayerChoice() {             //Function to get input from player
    // input = players choice
    // playerInput = prompt("Enter Rock, Paper, Or Scissors!"); // Variable to get rock 
    // playerChoiceunused = playerInput.toUpperCase(); // Variable to convert players choice to case insensitive.
    // playerChoice = playerInput[0].toUpperCase() + playerInput.substring(1); // Variable to convert players choice to case insensitive, and capitalized the first letter.
    // for ((playerChoice != 'Rock') || (playerChoice != 'Paper') || (playerChoice != 'Scissors'))
    // {
    //     alert("Enter Rock, Paper, or Scissors!");
    //     getPlayerChoice();
    // }
    // if (playerChoice != 'Rock' || playerChoice != 'Paper' || playerChoice != 'Scissors') {
    //     console.log("You must enter either 'Rock', 'Paper', or 'Scissors'.");

    // if (playerChoice != 'Rock' || playerChoice != 'Paper' || playerChoice != 'Scissors') {
    //     console.log("You must enter either 'Rock', 'Paper', or 'Scissors'.");
    //     playerInput = prompt("Enter Rock, Paper, Or Scissors!");
    // }
//     return playerChoice;
// 