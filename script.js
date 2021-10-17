// Variables for state
var timesPlayed = 0;
var timesWon = 0;
var timesDrawn = 0;
var gameMode = "normal";
var userName = "Player";
var takeInputFrom = "user";
var gameVersion = "standard";
var firstInput = true;
var whoWinsKorean = "Nobody";
var typeWhatToContinue =
  "<br>Please type 'scissors', 'paper' or 'stone' to continue.";
var myOutputValue = "";

// Random SPS computer roll
var computerRoll = function () {
  var randomNumber = Math.random() * 3;
  var randomInteger = Math.floor(randomNumber);
  if (randomInteger == 0) {
    var computerChoice = "scissors";
  }
  if (randomInteger == 1) {
    computerChoice = "paper";
  }
  if (randomInteger == 2) {
    computerChoice = "stone";
  }
  return computerChoice;
};

// Random special SPS computer roll
var specialComputerRoll = function () {
  var randomNumber2 = Math.random() * 5;
  var randomInteger2 = Math.floor(randomNumber2);
  if (randomInteger2 == 0) {
    var computerChoice2 = "scissors";
  }
  if (randomInteger2 == 1) {
    computerChoice2 = "paper";
  }
  if (randomInteger2 == 2) {
    computerChoice2 = "stone";
  }
  if (randomInteger2 == 3) {
    computerChoice2 = "lizard";
  }
  if (randomInteger2 == 4) {
    computerChoice2 = "spock";
  }
  return computerChoice2;
};

// Normal Scissors Paper Stone
var scissorsPaperStone = function (userDecision) {
  console.log("Game version:", gameVersion);
  console.log("Game mode:", gameMode);
  console.log(takeInputFrom, "guesses");
  var computerDecision = computerRoll();
  // This line lets computer input the guess if computer mode is on
  if (takeInputFrom == "computer") {
    userDecision = computerRoll();
  }
  var outcome =
    "There are only 3 options: 'scissors', 'paper', or 'stone'. You entered something weird and lost as a result. Please try again.";
  timesPlayed = timesPlayed + 1;
  console.log("User: " + userDecision);
  console.log("Computer: " + computerDecision);
  if (userDecision == computerDecision) {
    outcome = "It's a draw.";
    timesDrawn = timesDrawn + 1;
  }
  if (
    (userDecision == "scissors" && computerDecision == "paper") ||
    (userDecision == "paper" && computerDecision == "stone") ||
    (userDecision == "stone" && computerDecision == "scissors")
  ) {
    outcome = "Congrats, you win!";
    timesWon = timesWon + 1;
  }
  if (
    (userDecision == "scissors" && computerDecision == "stone") ||
    (userDecision == "paper" && computerDecision == "scissors") ||
    (userDecision == "stone" && computerDecision == "paper")
  ) {
    outcome = "Sorry, you lose. Bummer!";
  }
  var gameReply =
    "You chose " +
    userDecision +
    ".<br>The computer chose " +
    computerDecision +
    ".<br>" +
    outcome +
    "<br><br>Type 'scissors', 'paper' or 'stone' to try again.<br>";
  console.log(outcome);
  console.log(" ");
  return gameReply;
};

// Reverse Scissors Paper Stone
var reverseScissorsPaperStone = function (userDecision) {
  console.log("Game version:", gameVersion);
  console.log("Game mode:", gameMode);
  console.log(takeInputFrom, " guesses");
  var computerDecision = computerRoll();
  // This line lets computer input the guess if computer mode is on
  if (takeInputFrom == "computer") {
    userDecision = computerRoll();
  }
  var outcome =
    "There are only 3 options: 'scissors', 'paper', or 'stone'. You entered something weird and lost as a result. Please try again.";
  timesPlayed = timesPlayed + 1;
  console.log("User: " + userDecision);
  console.log("Computer: " + computerDecision);
  if (
    (userDecision == "scissors" && computerDecision == "scissors") ||
    (userDecision == "paper" && computerDecision == "paper") ||
    (userDecision == "stone" && computerDecision == "stone")
  ) {
    outcome = "It's a draw.";
    timesDrawn = timesDrawn + 1;
  }
  if (
    (userDecision == "scissors" && computerDecision == "paper") ||
    (userDecision == "paper" && computerDecision == "stone") ||
    (userDecision == "stone" && computerDecision == "scissors")
  ) {
    outcome = "Sorry, you lose. Bummer!";
  }
  if (
    (userDecision == "scissors" && computerDecision == "stone") ||
    (userDecision == "paper" && computerDecision == "scissors") ||
    (userDecision == "stone" && computerDecision == "paper")
  ) {
    outcome = "Congrats, you win!";
    timesWon = timesWon + 1;
  }
  var gameReply =
    "You chose " +
    userDecision +
    ".<br>The computer chose " +
    computerDecision +
    ".<br>" +
    outcome +
    "<br><br>Type 'reverse', then 'scissors', 'paper' or 'stone' to try again. <br>";
  console.log(outcome);
  console.log(" ");
  return gameReply;
};

// Korean Scissors Paper Stone
var koreanScissorsPaperStone = function (userDecision) {
  console.log("Game version:", gameVersion);
  console.log("Game mode:", gameMode);
  console.log(takeInputFrom, "guesses");
  var computerDecision = computerRoll();
  // This line lets computer input the guess if computer mode is on
  if (takeInputFrom == "computer") {
    userDecision = computerRoll();
  }
  var outcome =
    "There are only 3 options: 'scissors', 'paper', or 'stone'. Please try again.";
  console.log("User: " + userDecision);
  console.log("Computer: " + computerDecision);

  if (userDecision == computerDecision) {
    outcome =
      "Same item thrown, game ends! The winner is " + whoWinsKorean + "!";
    if (whoWinsKorean == "Nobody") {
      timesDrawn = timesDrawn + 1;
    }
    if (whoWinsKorean == userName) {
      timesWon = timesWon + 1;
    }
    timesPlayed = timesPlayed + 1;
    whoWinsKorean = "Nobody";
  }
  if (
    (userDecision == "scissors" && computerDecision == "paper") ||
    (userDecision == "paper" && computerDecision == "stone") ||
    (userDecision == "stone" && computerDecision == "scissors")
  ) {
    outcome = "You beat Computer. Muk-jji-ppa!";
    whoWinsKorean = userName;
  }
  if (
    (userDecision == "scissors" && computerDecision == "stone") ||
    (userDecision == "paper" && computerDecision == "scissors") ||
    (userDecision == "stone" && computerDecision == "paper")
  ) {
    outcome = "Computer beats you. Muk-jji-ppa!";
    whoWinsKorean = "Computer";
  }
  var gameReply =
    "You chose " +
    userDecision +
    ".<br>The computer chose " +
    computerDecision +
    ".<br>" +
    outcome;
  console.log(outcome);
  console.log(" ");
  return gameReply;
};

// Reverse Korean Scissors Paper Stone
var reverseKoreanScissorsPaperStone = function (userDecision) {
  console.log("Game version:", gameVersion);
  console.log("Game mode:", gameMode);
  console.log(takeInputFrom, "guesses");
  var computerDecision = computerRoll();
  // This line lets computer input the guess if computer mode is on
  if (takeInputFrom == "computer") {
    userDecision = computerRoll();
  }
  var outcome =
    "There are only 3 options: 'scissors', 'paper', or 'stone'. Please try again.";
  console.log("User: " + userDecision);
  console.log("Computer: " + computerDecision);

  if (userDecision == computerDecision) {
    outcome =
      "Same item thrown, game ends! The winner is " + whoWinsKorean + "!";
    if (whoWinsKorean == "Nobody") {
      timesDrawn = timesDrawn + 1;
    }
    if (whoWinsKorean == userName) {
      timesWon = timesWon + 1;
    }
    timesPlayed = timesPlayed + 1;
    whoWinsKorean = "Nobody";
  }
  if (
    (userDecision == "scissors" && computerDecision == "paper") ||
    (userDecision == "paper" && computerDecision == "stone") ||
    (userDecision == "stone" && computerDecision == "scissors")
  ) {
    outcome = "Computer beats you. Muk-jji-ppa!";
    whoWinsKorean = "Computer";
  }
  if (
    (userDecision == "scissors" && computerDecision == "stone") ||
    (userDecision == "paper" && computerDecision == "scissors") ||
    (userDecision == "stone" && computerDecision == "paper")
  ) {
    outcome = "You beat Computer. Muk-jji-ppa!";
    whoWinsKorean = userName;
  }
  var gameReply =
    "You chose " +
    userDecision +
    ".<br>The computer chose " +
    computerDecision +
    ".<br>" +
    outcome;
  console.log(outcome);
  console.log(" ");
  return gameReply;
};

// Scissors Paper Stone Lizard Spock
var specialScissorsPaperStone = function (userDecision) {
  console.log("Game version:", gameVersion);
  console.log("Game mode:", gameMode);
  console.log(takeInputFrom, "guesses");
  var computerDecision = specialComputerRoll();
  // This line lets computer input the guess if computer mode is on
  if (takeInputFrom == "computer") {
    userDecision = specialComputerRoll();
  }
  var outcome =
    "There are only 5 options: 'scissors', 'paper', 'stone', 'lizard' or 'spock'. You entered something weird and lost as a result. Please try again.";
  timesPlayed = timesPlayed + 1;
  console.log("User: " + userDecision);
  console.log("Computer: " + computerDecision);
  //Player draws with computer
  if (userDecision == computerDecision) {
    outcome = "It's a draw.";
    timesDrawn = timesDrawn + 1;
  }
  //Player picks scissors
  if (userDecision == "scissors") {
    if (computerDecision == "paper") {
      outcome = "Scissors cuts paper. You win!";
      timesWon = timesWon + 1;
    }
    if (computerDecision == "stone") {
      outcome = "Stone smashes scissors. You lose.";
    }
    if (computerDecision == "lizard") {
      outcome = "Scissors decapitates lizard. You win!";
      timesWon = timesWon + 1;
    }
    if (computerDecision == "spock") {
      outcome = "Spock smashes scissors. You lose.";
    }
  }
  //Player picks paper
  if (userDecision == "paper") {
    if (computerDecision == "stone") {
      outcome = "Paper covers stone. You win!";
      timesWon = timesWon + 1;
    }
    if (computerDecision == "lizard") {
      outcome = "Lizard eats paper. You lose.";
    }
    if (computerDecision == "spock") {
      outcome = "Paper disproves Spock. You win!";
      timesWon = timesWon + 1;
    }
    if (computerDecision == "scissors") {
      outcome = "Scissors cuts paper. You lose.";
    }
  }
  //Player picks stone
  if (userDecision == "stone") {
    if (computerDecision == "lizard") {
      outcome = "Stone crushes lizard. You win!";
      timesWon = timesWon + 1;
    }
    if (computerDecision == "spock") {
      outcome = "Spock vaporizes stone. You lose.";
    }
    if (computerDecision == "scissors") {
      outcome = "Stone smashes scissors. You win!";
      timesWon = timesWon + 1;
    }
    if (computerDecision == "paper") {
      outcome = "Paper covers stone. You lose.";
    }
  }
  //Player picks lizard
  if (userDecision == "lizard") {
    if (computerDecision == "spock") {
      outcome = "Lizard poisons Spock. You win!";
      timesWon = timesWon + 1;
    }
    if (computerDecision == "scissors") {
      outcome = "Scissors decapitates lizard. You lose.";
    }
    if (computerDecision == "paper") {
      outcome = "Lizard eats paper. You win!";
      timesWon = timesWon + 1;
    }
    if (computerDecision == "stone") {
      outcome = "Stone crushes lizard. You lose.";
    }
  }
  //Player picks spock
  if (userDecision == "spock") {
    if (computerDecision == "scissors") {
      outcome = "Spock smashes scissors. You win!";
      timesWon = timesWon + 1;
    }
    if (computerDecision == "paper") {
      outcome = "Paper disproves Spock. You lose.";
    }
    if (computerDecision == "stone") {
      outcome = "Spock vaporizes stone. You win!";
      timesWon = timesWon + 1;
    }
    if (computerDecision == "lizard") {
      outcome = "Lizard poisons Spock. You lose.";
    }
  }
  var gameReply =
    "You throw " +
    userDecision +
    ". Computer throws " +
    computerDecision +
    ".<br>" +
    outcome +
    "<br><br>Type 'scissors', 'paper' , 'stone', 'lizard' or 'spock' to try again.<br>";
  console.log(outcome);
  console.log(" ");
  return gameReply;
};

// Reverse Scissors Paper Stone Lizard Spock
var reverseSpecialScissorsPaperStone = function (userDecision) {
  console.log("Game version:", gameVersion);
  console.log("Game mode:", gameMode);
  console.log(takeInputFrom, "guesses");
  var computerDecision = specialComputerRoll();
  // This line lets computer input the guess if computer mode is on
  if (takeInputFrom == "computer") {
    userDecision = specialComputerRoll();
  }
  var outcome =
    "There are only 5 options: 'scissors', 'paper', 'stone', 'lizard' or 'spock'. You entered something weird and lost as a result. Please try again.";
  timesPlayed = timesPlayed + 1;
  console.log("User: " + userDecision);
  console.log("Computer: " + computerDecision);
  //Player draws with computer
  if (userDecision == computerDecision) {
    outcome = "It's a draw.";
    timesDrawn = timesDrawn + 1;
  }
  //Player picks scissors
  if (userDecision == "scissors") {
    if (computerDecision == "paper") {
      outcome = "Scissors cuts paper. You lose.";
    }
    if (computerDecision == "stone") {
      outcome = "Stone smashes scissors. You win!";
      timesWon = timesWon + 1;
    }
    if (computerDecision == "lizard") {
      outcome = "Scissors decapitates lizard. You lose.";
    }
    if (computerDecision == "spock") {
      outcome = "Spock smashes scissors. You win!";
      timesWon = timesWon + 1;
    }
  }
  //Player picks paper
  if (userDecision == "paper") {
    if (computerDecision == "stone") {
      outcome = "Paper covers stone. You lose.";
    }
    if (computerDecision == "lizard") {
      outcome = "Lizard eats paper. You win!";
      timesWon = timesWon + 1;
    }
    if (computerDecision == "spock") {
      outcome = "Paper disproves Spock. You lose.";
    }
    if (computerDecision == "scissors") {
      outcome = "Scissors cuts paper. You win!";
      timesWon = timesWon + 1;
    }
  }
  //Player picks stone
  if (userDecision == "stone") {
    if (computerDecision == "lizard") {
      outcome = "Stone crushes lizard. You lose.";
    }
    if (computerDecision == "spock") {
      outcome = "Spock vaporizes stone. You win!";
      timesWon = timesWon + 1;
    }
    if (computerDecision == "scissors") {
      outcome = "Stone smashes scissors. You lose.";
    }
    if (computerDecision == "paper") {
      outcome = "Paper covers stone. You win!";
      timesWon = timesWon + 1;
    }
  }
  //Player picks lizard
  if (userDecision == "lizard") {
    if (computerDecision == "spock") {
      outcome = "Lizard poisons Spock. You lose.";
    }
    if (computerDecision == "scissors") {
      outcome = "Scissors decapitates lizard. You win!";
      timesWon = timesWon + 1;
    }
    if (computerDecision == "paper") {
      outcome = "Lizard eats paper. You lose.";
    }
    if (computerDecision == "stone") {
      outcome = "Stone crushes lizard. You win!";
      timesWon = timesWon + 1;
    }
  }
  //Player picks spock
  if (userDecision == "spock") {
    if (computerDecision == "scissors") {
      outcome = "Spock smashes scissors. You lose.";
    }
    if (computerDecision == "paper") {
      outcome = "Paper disproves Spock. You win!";
      timesWon = timesWon + 1;
    }
    if (computerDecision == "stone") {
      outcome = "Spock vaporizes stone. You lose.";
    }
    if (computerDecision == "lizard") {
      outcome = "Lizard poisons Spock. You win!";
      timesWon = timesWon + 1;
    }
  }
  var gameReply =
    "You throw " +
    userDecision +
    ". Computer throws " +
    computerDecision +
    ".<br>" +
    outcome +
    "<br><br>Type 'scissors', 'paper', 'stone', 'lizard' or 'spock' to try again.<br>";
  console.log(outcome);
  console.log(" ");
  return gameReply;
};

// Main Game Code!
var main = function (input) {
  // Setting player's name
  if (firstInput == true) {
    userName = input;
    //First message to player
    myOutputValue =
      "Welcome to Scissors Paper Stone, " +
      userName +
      "!<br>Choose a game mode: normal, reverse.<br>You can also choose a game version: standard, korean, or special.<br>Lastly, you can also type 'computer' if you want the computer to guess for you.<br>You can change your game version or mode anytime during the game.<br><br>You're now playing the standard version in normal mode.<br>Please type 'scissors', 'paper' or 'stone' if you want to start playing.<br>";
    firstInput = false;
    return myOutputValue;
  }

  // Calibrating game modes
  if (input == "normal") {
    gameMode = "normal";
    myOutputValue =
      "You've chosen to play the " +
      gameVersion +
      " version in " +
      gameMode +
      " mode, " +
      userName +
      "!<br>" +
      typeWhatToContinue +
      "<br>";
    return myOutputValue;
  }
  if (input == "reverse") {
    gameMode = "reverse";
    myOutputValue =
      "You've chosen to play the " +
      gameVersion +
      " version in " +
      gameMode +
      " mode, " +
      userName +
      "!<br>" +
      typeWhatToContinue +
      "<br>";
    return myOutputValue;
  }

  //Calibrating game versions
  if (input == "korean") {
    gameVersion = "korean";
    typeWhatToContinue =
      "<br>Please type 'scissors', 'paper' or 'stone' to continue.";
    myOutputValue =
      "You've chosen to play the " +
      gameVersion +
      " version in " +
      gameMode +
      " mode, " +
      userName +
      "!<br>" +
      typeWhatToContinue +
      "<br>";
    return myOutputValue;
  }
  if (input == "standard") {
    gameVersion = "standard";
    typeWhatToContinue =
      "<br>Please type 'scissors', 'paper' or 'stone' to continue.";
    myOutputValue =
      "You've chosen to play the " +
      gameVersion +
      " version in " +
      gameMode +
      " mode, " +
      userName +
      "!<br>" +
      typeWhatToContinue +
      "<br>";
    return myOutputValue;
  }
  if (input == "special") {
    gameVersion = "special";
    typeWhatToContinue =
      "This special version is Scissors-Paper-Stone-Lizard-Spock.<br>Please type 'scissors', 'paper', 'stone', 'lizard' or 'spock' to continue.";
    myOutputValue =
      "You've chosen to play the " +
      gameVersion +
      " version in " +
      gameMode +
      " mode, " +
      userName +
      "!<br>" +
      typeWhatToContinue +
      "<br>";
    return myOutputValue;
  }

  // Takes input from computer or player
  if (input == "computer") {
    takeInputFrom = "computer";
    myOutputValue =
      "The computer will choose the subsequent guesses for you! Type 'user' to discontinue this.<br>";
    return myOutputValue;
  }
  if (input == "user") {
    takeInputFrom = "user";
    myOutputValue =
      "You have reverted to user input for guesses. Type 'computer' to ask the computer to choose for you.<br>";
    return myOutputValue;
  }

  // Choosing which game function to run
  if (gameMode == "normal" && gameVersion == "standard") {
    myOutputValue = scissorsPaperStone(input);
  }
  if (gameMode == "reverse" && gameVersion == "standard") {
    myOutputValue = reverseScissorsPaperStone(input);
  }
  if (gameMode == "normal" && gameVersion == "korean") {
    myOutputValue = koreanScissorsPaperStone(input);
  }
  if (gameMode == "reverse" && gameVersion == "korean") {
    myOutputValue = reverseKoreanScissorsPaperStone(input);
  }
  if (gameMode == "normal" && gameVersion == "special") {
    myOutputValue = specialScissorsPaperStone(input);
  }
  if (gameMode == "reverse" && gameVersion == "special") {
    myOutputValue = reverseSpecialScissorsPaperStone(input);
  }

  var percentageWon = (timesWon / timesPlayed) * 100;
  var stateComment =
    "<br><br>So far, " +
    userName +
    ", you have played " +
    timesPlayed +
    " times and won " +
    timesWon +
    " times.<br>Number of draws: " +
    timesDrawn +
    "<br>Percentage of tries won: " +
    percentageWon +
    "%";

  return myOutputValue + stateComment;
};
