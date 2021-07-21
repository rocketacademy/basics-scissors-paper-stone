var attempts = 0;
var wins = 0;
var playerName = "";
var gamemode = "normal";
var currentWinner = "";

// right now attempts & win count carries over for normal and reversed game, but not korean version

var main = function (input) {
  if (playerName == "") {
    playerName = input;
    return (
      `Hi ${playerName}, please enter Scissors or Paper or Stone to start playing the conventional game!` +
      "<br><br> Alternatively, enter 'reverse' anytime to play the reversed version of the game. <br><br> You can also enter 'korean' to play the Korean version of the game. <br><br> Enter 'normal' to revert back to the conventional game!"
    );
  }
  input = input.toLowerCase();

  // generating computer choice
  var genRandomNumber = Math.floor(Math.random() * 3 + 1);
  var computerChoice = "scissors";
  if (genRandomNumber == 1) {
    computerChoice = "paper";
  }
  if (genRandomNumber == 2) {
    computerChoice = "stone";
  }

  if (input == "reverse") {
    gamemode = "reverse";
    return "Game mode reversed. <br><br> Enter 'normal' anytime to revert back to the conventional game.";
  }
  if (input == "normal") {
    gamemode = "normal";
    return "Game mode is now normal";
  }
  if (input == "korean") {
    gamemode = "korean";
    return "Game mode is now Korean";
  }
  if (gamemode == "reverse") {
    return winCondition(computerChoice, input);
  }
  if (gamemode == "normal") {
    return winCondition(input, computerChoice);
  }
  if (gamemode == "korean") {
    return koreanGame(input, computerChoice);
  }
};

var winCondition = function (input, computerChoice) {
  // Default lose unless fulfill win condition
  if (input == "scissors" && computerChoice == "paper") {
    wins += 1;
    myOutputValue = "You win!";
  } else if (input == "paper" && computerChoice == "stone") {
    wins += 1;
    myOutputValue = "You win!";
  } else if (input == "stone" && computerChoice == "scissors") {
    wins += 1;
    myOutputValue = "You win!";
  } else if (computerChoice == input) {
    myOutputValue = "DRAW!!";
  } else myOutputValue = "You lose...";

  // Add emoji
  if (computerChoice == "scissors") {
    computerChoice = computerChoice + " ✂️";
  } else if (computerChoice == "paper") {
    computerChoice = computerChoice + " 🧻";
  } else {
    computerChoice = computerChoice + " 🪨";
  }

  if (input !== "scissors" && input !== "paper" && input !== "stone") {
    return "Oops, please enter a valid choice (scissors / paper / stone)";
  }
  // add attempt count if valid input
  attempts += 1;

  if (gamemode == "normal") {
    myOutputValue =
      myOutputValue +
      ` The computer used ${computerChoice}` +
      `<br><br> You have played ${attempts} game(s) and won ${wins} time(s)` +
      "<br><br> Enter (Scissors/Paper/Stone) to play another round (remember to change the gamemode if needed)!";
    return myOutputValue;
  } else {
    myOutputValue =
      myOutputValue +
      ` The computer used ${input}` +
      `<br><br> You have played ${attempts} game(s) and won ${wins} time(s)` +
      "<br><br> Enter (Scissors/Paper/Stone) to play another round (remember to change the gamemode if needed)!";
    return myOutputValue;
  }
};

var koreanGame = function (input, computerChoice) {
  if (input == "scissors" && computerChoice == "paper") {
    wins += 1;
    myOutputValue = "You win!";
  } else if (input == "paper" && computerChoice == "stone") {
    wins += 1;
    myOutputValue = "You win!";
  } else if (input == "stone" && computerChoice == "scissors") {
    wins += 1;
    myOutputValue = "You win!";
  } else if (computerChoice == input) {
    myOutputValue = "DRAW!!";
  } else myOutputValue = "You lose...";

  console.log(input);
  console.log(computerChoice);
  console.log(myOutputValue);
  console.log(currentWinner);
  if (myOutputValue == "You win!") {
    currentWinner = "you";
    return (
      "MUK-JJI-PPA!! <br><br>" +
      `You used ${input} and computer used ${computerChoice}` +
      "<br><br> Quickly enter another choice of either scissors, paper or stone! <br><br>" +
      `Current Winner: ${currentWinner}`
    );
  }
  if (myOutputValue == "You lose...") {
    currentWinner = "computer";
    return (
      "MUK-JJI-PPA!!<br><br>" +
      `You used ${input} and computer used ${computerChoice}` +
      "<br><br> Quickly enter another choice of either scissors, paper or stone! <br><br>" +
      `Current Winner: ${currentWinner}`
    );
  } else {
    if (currentWinner == "") {
      return `Draw! You used ${input} and computer used ${computerChoice}`;
    } else {
      var koreanMessage =
        "We have a winner! <br><br>" +
        `You used ${input} and the computer used ${computerChoice}, so the ultimate winner is ${currentWinner}!!!`;
      currentWinner = "";
      console.log(currentWinner);
      return koreanMessage;
    }
  }
};
