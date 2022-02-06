function computerPlay() {
    // randomly enters rock, paper or scissors
    var options = ["rock", "paper", "scissors"];
    const randomPick = options[Math.floor(Math.random() * options.length)];
    return randomPick;
}

function playRound(number) {

    // PROMPT user for selection 
    //var userPick = window.prompt("Rock, paper or scissors?");
    var userPick = window.prompt("Round " + number + " of 5. Rock, paper or scissors?");
    var computerSelection = computerPlay();

    // make it case insensitive
    userPick = userPick.toLowerCase();

    if (userPick == "rock") {
        if (computerSelection == "rock") {
            window.alert("You played rock. Computer played rock.");
            return "tie";
        }
        else if (computerSelection == "paper") {
            window.alert("You played rock. Computer played paper.");
            return "lost";
        }
        else {
            window.alert("You played rock. Computer played scissors.");
            return "won";
        }
    }
    else if (userPick == "paper") {
        if (computerSelection == "rock") {
            window.alert("You played paper. Computer played rock.");
            return "won";
        }
        else if (computerSelection == "paper") {
            window.alert("You played paper. Computer played paper.");
            return "tie";
        }
        else {
            window.alert("You played paper. Computer played scissors.");
            return "lost";
        }
    }
    else if (userPick == "scissors") {
        if (computerSelection == "rock") {
            window.alert("You played scissors. Computer played rock.");
            return "lost";
        }
        else if (computerSelection == "paper") {
            window.alert("You played scissors. Computer played paper.");
            return "won";
        }
        else {
            window.alert("You played scissors. Computer played scissors.");
            return "tie";
        }
    }
    else {
        return "error";
    }
}

function game() {
    // play playRound 5 times
    var playerScore = 0;
    var computerScore = 0;

    for (let i = 0; i < 5; i++) {

        result = playRound(i+1);
        if (result == "won") {
            window.alert ("You won!");
            playerScore++;
        }
        else if (result == "lost") {
            window.alert ("You lost :(");
            computerScore++;
        }
        else if (result == "tie") {
            window.alert ("It's a tie");
        }
        else {
            i--;
            window.alert ("Sorry, there was an error. Try again!");
        }
    }

    if (playerScore > computerScore) {
        window.alert  ("You have won the game! Hurrah! The score is " + playerScore + " to " + computerScore);
    }
    else if (playerScore < computerScore) {
        window.alert  ("You have won lost the game, sad times. The score is " + playerScore + " to " + computerScore);
    }
}

game();
