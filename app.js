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

function playRound(player_selection, computer_selection, points) {
    if (player_selection == 'rock' && computer_selection == 'rock' || player_selection == 'paper' && computer_selection == 'paper' || player_selection == 'scissors' && computer_selection == 'scissors') {
        alert(`It's a draw! You both chose ${player_selection}.`);
    }
    if (player_selection == 'rock' && computer_selection == 'scissors' || player_selection == 'paper' && computer_selection == 'rock' || player_selection == 'scissors' && computer_selection == 'paper') {
        alert(`You won this round! ${player_selection} beats ${computer_selection}.`);
        points.player++;
    }
    if (computer_selection == 'rock' && player_selection == 'scissors' || computer_selection == 'paper' && player_selection == 'rock' || computer_selection == 'scissors' && player_selection == 'paper') {
        alert(`You lost this round! ${computer_selection} beats ${player_selection}.`);
        points.computer++;
    }
}

function game() {
    let points = {
        computer: 0,
        player: 0,
    }

    for (let i = 0; i < 5; i++) {
        let player_selection = playerPlay(i);
        if (player_selection == 'invalid') {
            i--;
            continue;
        }
        let computer_selection = computerPlay();
        playRound(player_selection, computer_selection, points);
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