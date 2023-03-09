function computerPlay() {
    let computer_choice = 0;
    computer_choice = Math.floor(Math.random() * 3);

    if (computer_choice == 0) {
        alert("computer chose rock!")
        return 'rock';
    } else if (computer_choice == 1) {
        alert("computer chose paper!")
        return 'paper';
    } else {
        alert("computer chose scissors!")
        return 'scissors';
    }
}

function playerPlay(round_num) {
    let player_choice = prompt(`Round: ${round_num + 1} \nType rock, paper, or scissors!`);

    if (player_choice.toLowerCase() == 'rock') {
        alert("you chose rock!")
        return 'rock';
    } else if (player_choice.toLowerCase() == 'paper') {
        alert("you chose paper!")
        return 'paper';
    } else if (player_choice.toLowerCase() == "scissors") {
        alert("you chose scissors!")
        return 'scissors';
    } else {
        alert("Invalid Input! You must make a choice only from the following: rock, paper, scissors");
        return 'invalid';
    }
}

function playRound(playerSelection, computerSelection, points) {
    if (playerSelection == 'rock' && computerSelection == 'rock' || playerSelection == 'paper' && computerSelection == 'paper' || playerSelection == 'scissors' && computerSelection == 'scissors') {
        alert(`It's a draw! You both chose ${playerSelection}.`);
    }
    if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper') {
        alert(`You won this round! ${playerSelection} beats ${computerSelection}.`);
        points.player++;
    }
    if (computerSelection == 'rock' && playerSelection == 'scissors' || computerSelection == 'paper' && playerSelection == 'rock' || computerSelection == 'scissors' && playerSelection == 'paper') {
        alert(`You lost this round! ${computerSelection} beats ${playerSelection}.`);
        points.computer++;
    }
}

function game() {
    let points = {
        computer: 0,
        player: 0,
    }

    for (let i = 0; i < 5; i++) {
        let playerSelection = playerPlay(i);
        if (playerSelection == 'invalid') {
            i--;
            continue;
        }
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection, points);
    }

    if (points.player > points.computer) {
        alert(`Congragulations! You won the game! You won ${points.player} times while the computer only won ${points.computer}.`);
    }
    if (points.player < points.computer) {
        alert(`Better luck next time. You lost the game! Computer won ${points.computer} times while you only won ${points.player}.`);
    }
    if (points.player == points.computer) {
        alert(`It's a draw overall! Both you and the computer scored evenly.`);
    }
}

game();