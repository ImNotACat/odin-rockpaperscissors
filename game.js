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
    userPick.toLowerCase;

    if (userPick == "rock") {
        if (computerSelection == "rock") {
            console.log("You played rock. Computer played rock.");
            return "tie";
        }
        else if (computerSelection == "paper") {
            console.log("You played rock. Computer played paper.");
            return "lost";
        }
        else {
            console.log("You played rock. Computer played scissors.");
            return "won";
        }
    }
    else if (userPick == "paper") {
        if (computerSelection == "rock") {
            console.log("You played paper. Computer played rock.");
            return "won";
        }
        else if (computerSelection == "paper") {
            console.log("You played paper. Computer played paper.");
            return "tie";
        }
        else {
            console.log("You played paper. Computer played scissors.");
            return "lost";
        }
    }
    else if (userPick == "scissors") {
        if (computerSelection == "rock") {
            console.log("You played scissors. Computer played rock.");
            return "lost";
        }
        else if (computerSelection == "paper") {
            console.log("You played scissors. Computer played paper.");
            return "won";
        }
        else {
            console.log("You played scissors. Computer played scissors.");
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
            console.log ("You won!");
            playerScore++;
        }
        else if (result == "lost") {
            console.log ("You lost :(");
            computerScore++;
        }
        else if (result == "tie") {
            console.log ("It's a tie");
        }
        else if (result == "error") {
            i--
        }
        else {
            console.log ("Sorry, there was an error. Try again!");
        }
    }

    if (playerScore > computerScore) {
        console.log ("You have won the game! Hurrah! The score is " + playerScore + " to " + computerScore);
    }
    else if (playerScore < computerScore) {
        console.log ("You have won lost the game, sad times. The score is " + playerScore + " to " + computerScore);
    }
}

game();