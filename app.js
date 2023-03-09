function computerPlay() {
    let computer_choice = 0;
    computer_choice = Math.floor(Math.random() * 3);

    if (computer_choice == 0) {
        alert("computer chose rock!")
        return 'rock';
    }
    else if (computer_choice == 1) {
        alert("computer chose paper!")
        return 'paper';
    }
    else {
        alert("computer chose scissors!")
        return 'scissors';
    }
}

function playerPlay() {
    let player_choice = prompt("Type rock, paper, or scissors!");

    if (player_choice.toLowerCase() == 'rock') {
        alert("you chose rock!")
        return 'rock';
    } else if (player_choice.toLowerCase() == 'paper') {
        alert("you chose paper!")
        return 'paper';
    } else if (player_choice.toLowerCase() == "scissors") {
        alert("you chose scissors!")
        return 'scissors';
    }
    else {
        console.log("Invalid Input! You must make a choice only from the following: rock, paper, scissors");
        /*playerPlay(); //how do I make the function run again? */
    }

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'rock' || playerSelection == 'paper' && computerSelection == 'paper' || playerSelection == 'scissors' && computerSelection == 'scissors') {
        alert(`It's a draw! You both chose ${playerSelection}.`);
        //no one gets points 
    }
    if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper') {
        alert(`You won this round! ${playerSelection} beats ${computerSelection}.`);
        player_points++;//player gets points 
    }
    if (computerSelection == 'rock' && playerSelection == 'scissors' || computerSelection == 'paper' && playerSelection == 'rock' || computerSelection == 'scissors' && playerSelection == 'paper') {
        alert(`You lost this round! ${computerSelection} beats ${playerSelection}.`);
        computer_points++; //computer gets points 
    }
}

let player_points = 0; //with naming conventions Branko said to use snake_case or camelCase. Said to use one for variables and one for functions. What do I do? 
let computer_points = 0;
const playerSelection = playerPlay();
const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

function game() {

    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
    }

    if (player_points > computer_points) {
        console.log(`Congragulations! You won the game! You won ${player_points} times while the computer only won ${computer_points}.`);
    }
    if (player_points < computer_points) {
        console.log(`Better luck next time. You lost the game! Computer won ${computer_points} times while you only won ${player_points}.`);
    }
    if (player_points == computer_points) {
        console.log(`It's a draw overall! Both you and the computer scored evenly.`);
    }
}

game();