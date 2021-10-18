// Variables for state
var timesPlayed = 0;
var timesWon = 0;
var timesDrawn = 0;
var gameMode = "normal";
var userName = "Player";
var takeInputFrom = "user";
var gameVersion = "standard";
var firstInput = true;
var typeWhatToContinue =
  "<br>Please type 'scissors', 'paper' or 'stone' to continue.";
var myOutputValue = "";

// Variables for game
var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
var LIZARD = "lizard";
var SPOCK = "spock";
var whoWinsKorean = "Nobody";
var userDecision = "";
var computerDecision = "";
var WINhand = false;
var DRAWhand = false;
var LOSEhand = false;

// Random SPS computer roll
var computerRoll = function () {
  var randomNumber = Math.random() * 3;
  var randomInteger = Math.floor(randomNumber);
  if (randomInteger == 0) {
    var computerChoice = SCISSORS;
  }
  if (randomInteger == 1) {
    computerChoice = PAPER;
  }
  if (randomInteger == 2) {
    computerChoice = STONE;
  }
  return computerChoice;
};

// Random special SPS computer roll
var specialComputerRoll = function () {
  var randomNumber2 = Math.random() * 5;
  var randomInteger2 = Math.floor(randomNumber2);
  if (randomInteger2 == 0) {
    var computerChoice2 = SCISSORS;
  }
  if (randomInteger2 == 1) {
    computerChoice2 = PAPER;
  }
  if (randomInteger2 == 2) {
    computerChoice2 = STONE;
  }
  if (randomInteger2 == 3) {
    computerChoice2 = LIZARD;
  }
  if (randomInteger2 == 4) {
    computerChoice2 = SPOCK;
  }
  return computerChoice2;
};

// Game logic
var logic = function (userDecision, computerDecision) {
  if (
    (userDecision == SCISSORS && computerDecision == PAPER) ||
    (userDecision == PAPER && computerDecision == STONE) ||
    (userDecision == STONE && computerDecision == LIZARD) ||
    (userDecision == LIZARD && computerDecision == SPOCK) ||
    (userDecision == SPOCK && computerDecision == SCISSORS) ||
    (userDecision == SCISSORS && computerDecision == LIZARD) ||
    (userDecision == LIZARD && computerDecision == PAPER) ||
    (userDecision == PAPER && computerDecision == SPOCK) ||
    (userDecision == SPOCK && computerDecision == STONE) ||
    (userDecision == STONE && computerDecision == SCISSORS)
  ) {
    WINhand = true;
    DRAWhand = false;
    LOSEhand = false;
    return;
  }
  if (userDecision == computerDecision) {
    DRAWhand = true;
    WINhand = false;
    LOSEhand = false;
  } else {
    LOSEhand = true;
    WINhand = false;
    DRAWhand = false;
  }
  return;
};

// Game logic description
var action1 = function (userDecision, computerDecision) {
  var output = "You entered something weird and lost as a result.";
  if (userDecision == computerDecision) {
    output = "";
  }
  if (
    (userDecision == SCISSORS && computerDecision == PAPER) ||
    (userDecision == PAPER && computerDecision == SCISSORS)
  ) {
    output = "Scissors cuts paper. ";
  }
  if (
    (userDecision == PAPER && computerDecision == STONE) ||
    (userDecision == STONE && computerDecision == PAPER)
  ) {
    output = "Paper covers stone. ";
  }
  if (
    (userDecision == STONE && computerDecision == LIZARD) ||
    (userDecision == LIZARD && computerDecision == STONE)
  ) {
    output = "Stone crushes lizard. ";
  }
  if (
    (userDecision == LIZARD && computerDecision == SPOCK) ||
    (userDecision == SPOCK && computerDecision == LIZARD)
  ) {
    output = "Lizard poisons Spock. ";
  }
  if (
    (userDecision == SPOCK && computerDecision == SCISSORS) ||
    (userDecision == SCISSORS && computerDecision == SPOCK)
  ) {
    output = "Spock smashes Scissors. ";
  }
  if (
    (userDecision == SCISSORS && computerDecision == LIZARD) ||
    (userDecision == LIZARD && computerDecision == SCISSORS)
  ) {
    output = "Scissors decapitates lizard. ";
  }
  if (
    (userDecision == LIZARD && computerDecision == PAPER) ||
    (userDecision == PAPER && computerDecision == LIZARD)
  ) {
    output = "Lizard eats paper. ";
  }
  if (
    (userDecision == PAPER && computerDecision == SPOCK) ||
    (userDecision == SPOCK && computerDecision == PAPER)
  ) {
    output = "Paper disproves Spock. ";
  }
  if (
    (userDecision == SPOCK && computerDecision == STONE) ||
    (userDecision == STONE && computerDecision == SPOCK)
  ) {
    output = "Spork vaporizes stone. ";
  }
  if (
    (userDecision == STONE && computerDecision == SCISSORS) ||
    (userDecision == SCISSORS && computerDecision == STONE)
  ) {
    output = "Stone smashes scissors. ";
  }
  return output;
};

// Normal Scissors Paper Stone
var scissorsPaperStone = function (userInput) {
  console.log("Game version:", gameVersion);
  console.log("Game mode:", gameMode);
  console.log(takeInputFrom, "guesses");
  computerDecision = computerRoll();
  // This line lets computer input the guess if computer mode is on
  if (takeInputFrom == "computer") {
    userDecision = computerRoll();
  } else {
    userDecision = userInput;
  }
  logic(userDecision, computerDecision);
  var action = action1(userDecision, computerDecision);
  var outcome = "";
  timesPlayed = timesPlayed + 1;
  console.log("User: " + userDecision);
  console.log("Computer: " + computerDecision);
  if (DRAWhand) {
    outcome = "It's a draw.";
    timesDrawn = timesDrawn + 1;
  }
  if (WINhand) {
    outcome = "Congrats, you win!";
    timesWon = timesWon + 1;
  }
  if (LOSEhand) {
    outcome = "Sorry, you lose. Bummer!";
  }
  var gameReply =
    "You chose " +
    userDecision +
    ".<br>The computer chose " +
    computerDecision +
    ".<br>" +
    action +
    outcome +
    "<br><br>Type 'scissors', 'paper' or 'stone' to try again.<br>";
  console.log(outcome);
  console.log(" ");
  return gameReply;
};

// Reverse Scissors Paper Stone
var reverseScissorsPaperStone = function (userInput) {
  console.log("Game version:", gameVersion);
  console.log("Game mode:", gameMode);
  console.log(takeInputFrom, " guesses");
  var computerDecision = computerRoll();
  if (takeInputFrom == "computer") {
    userDecision = computerRoll();
  } else {
    userDecision = userInput;
  }
  logic(userDecision, computerDecision);
  var action = action1(userDecision, computerDecision);
  var outcome = "";
  timesPlayed = timesPlayed + 1;
  console.log("User: " + userDecision);
  console.log("Computer: " + computerDecision);
  if (DRAWhand) {
    outcome = "It's a draw.";
    timesDrawn = timesDrawn + 1;
  }
  if (WINhand) {
    outcome = "Sorry, you lose. Bummer!";
  }
  if (LOSEhand) {
    outcome = "Congrats, you win!";
    timesWon = timesWon + 1;
  }
  var gameReply =
    "You chose " +
    userDecision +
    ".<br>The computer chose " +
    computerDecision +
    ".<br>" +
    action +
    outcome +
    "<br><br>Type 'reverse', then 'scissors', 'paper' or 'stone' to try again. <br>";
  console.log(outcome);
  console.log(" ");
  return gameReply;
};

// Korean Scissors Paper Stone
var koreanScissorsPaperStone = function (userInput) {
  console.log("Game version:", gameVersion);
  console.log("Game mode:", gameMode);
  console.log(takeInputFrom, "guesses");
  var computerDecision = computerRoll();
  if (takeInputFrom == "computer") {
    userDecision = computerRoll();
  } else {
    userDecision = userInput;
  }
  var outcome = "";
  console.log("User: " + userDecision);
  console.log("Computer: " + computerDecision);
  logic(userDecision, computerDecision);
  var action = action1(userDecision, computerDecision);
  if (DRAWhand) {
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
  if (WINhand) {
    outcome = "You beat Computer. Muk-jji-ppa! Keep playing.";
    whoWinsKorean = userName;
  }
  if (LOSEhand) {
    outcome = "Computer beats you. Muk-jji-ppa! Keep playing.";
    whoWinsKorean = "Computer";
  }
  var gameReply =
    "You chose " +
    userDecision +
    ".<br>The computer chose " +
    computerDecision +
    ".<br>" +
    action +
    outcome;
  console.log(outcome);
  console.log(" ");
  return gameReply;
};

// Reverse Korean Scissors Paper Stone
var reverseKoreanScissorsPaperStone = function (userInput) {
  console.log("Game version:", gameVersion);
  console.log("Game mode:", gameMode);
  console.log(takeInputFrom, "guesses");
  var computerDecision = computerRoll();
  if (takeInputFrom == "computer") {
    userDecision = computerRoll();
  } else {
    userDecision = userInput;
  }
  logic(userDecision, computerDecision);
  var action = action1(userDecision, computerDecision);
  var outcome = "";
  console.log("User: " + userDecision);
  console.log("Computer: " + computerDecision);
  if (DRAWhand) {
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
  if (WINhand) {
    outcome = "Computer beats you. Muk-jji-ppa!";
    whoWinsKorean = "Computer";
  }
  if (LOSEhand) {
    outcome = "You beat Computer. Muk-jji-ppa!";
    whoWinsKorean = userName;
  }
  var gameReply =
    "You chose " +
    userDecision +
    ".<br>The computer chose " +
    computerDecision +
    ".<br>" +
    action +
    outcome;
  console.log(outcome);
  console.log(" ");
  return gameReply;
};

// Scissors Paper Stone Lizard Spock
var specialScissorsPaperStone = function (userInput) {
  console.log("Game version:", gameVersion);
  console.log("Game mode:", gameMode);
  console.log(takeInputFrom, "guesses");
  var computerDecision = specialComputerRoll();
  if (takeInputFrom == "computer") {
    userDecision = specialComputerRoll();
  } else {
    userDecision = userInput;
  }
  logic(userDecision, computerDecision);
  var outcome = "";
  timesPlayed = timesPlayed + 1;
  console.log("User: " + userDecision);
  console.log("Computer: " + computerDecision);
  var action = action1(userDecision, computerDecision);
  if (DRAWhand) {
    outcome = "It's a draw.";
    timesDrawn = timesDrawn + 1;
  }
  if (WINhand) {
    outcome = "You win!";
    timesWon = timesWon + 1;
  }
  if (LOSEhand) {
    outcome = "You lose.";
  }
  var gameReply =
    "You throw " +
    userDecision +
    ". Computer throws " +
    computerDecision +
    ".<br>" +
    action +
    outcome +
    "<br><br>Type 'scissors', 'paper', 'stone', 'lizard' or 'spock' to try again.<br>";
  console.log(outcome);
  console.log(" ");
  return gameReply;
};

// Reverse Scissors Paper Stone Lizard Spock
var reverseSpecialScissorsPaperStone = function (userInput) {
  console.log("Game version:", gameVersion);
  console.log("Game mode:", gameMode);
  console.log(takeInputFrom, "guesses");
  var computerDecision = specialComputerRoll();
  if (takeInputFrom == "computer") {
    userDecision = specialComputerRoll();
  } else {
    userDecision = userInput;
  }
  logic(userDecision, computerDecision);
  var outcome = "";
  timesPlayed = timesPlayed + 1;
  console.log("User: " + userDecision);
  console.log("Computer: " + computerDecision);
  var action = action1(userDecision, computerDecision);
  if (DRAWhand) {
    outcome = "It's a draw.";
    timesDrawn = timesDrawn + 1;
  }
  if (LOSEhand) {
    outcome = "You win!";
    timesWon = timesWon + 1;
  }
  if (WINhand) {
    outcome = "You lose.";
  }
  var gameReply =
    "You throw " +
    userDecision +
    ". Computer throws " +
    computerDecision +
    ".<br>" +
    action +
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
      "<br>This special version is Scissors-Paper-Stone-Lizard-Spock.<br>Please type 'scissors', 'paper', 'stone', 'lizard' or 'spock' to continue.";
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
    typeWhatToContinue = "Press the Submit button to continue.";
    myOutputValue =
      "The computer will choose the subsequent guesses for you! Type 'user' to discontinue this.<br>You've chosen to play the " +
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
  if (input == "user") {
    takeInputFrom = "user";
    if (gameVersion == "special") {
      typeWhatToContinue =
        "<br>Please type 'scissors', 'paper', 'stone', 'lizard' or 'spock' to continue.";
    } else {
      typeWhatToContinue =
        "<br>Please type 'scissors', 'paper' or 'stone' to continue.";
    }
    myOutputValue =
      "You have reverted to user input for guesses. Type 'computer' to ask the computer to choose for you.<br>You've chosen to play the " +
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
