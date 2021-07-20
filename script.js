// Creating the global variable
var playerWinCounter = 0;
var playerLossCounter = 0;
var playerDrawCounter = 0;
var playerTotalCounter = 0;
var playerUsername = 0;
var versionInput = 0;
var recentWinner = 0;

var main = function (input) {
  var computerInput = rockPaperScissors();
  var myOutputValue = 0;

  // If there are no inputs yet, prompt to input username
  if (playerTotalCounter == 0 && playerUsername == 0 && versionInput == 0) {
    myOutputValue = "Hello world. Please input username.";
  }

  // Tie breaker variable ccreated for use when previous result is draw
  var koreanTieBreaker = 0;

  // If player username has been input but version is empty and game has not started, request user to input normal, korean, or computer.
  if (playerTotalCounter == 0 && !(playerUsername == 0) && versionInput == 0) {
    myOutputValue =
      "Hello " +
      playerUsername +
      ". Please input 'normal', 'korean' , or 'computer'.";
    if (input == "normal" || input == "korean" || input == "computer") {
      versionInput = input;
      myOutputValue =
        "Hello " +
        playerUsername +
        ". We are playing " +
        versionInput +
        " mode. Please input rock, paper , or scissors.";
    }
  }

  // if it is the first input, playTotalCount will be zero and username is zero. Take the first input as username.
  if (playerTotalCounter == 0 && playerUsername == 0 && !(input == 0)) {
    playerUsername = input;
    myOutputValue =
      "Hello " +
      playerUsername +
      ". Please input 'normal', 'korean' , or 'computer'.";
  }

  // To modify the input if game is under computer mode
  if (versionInput == "computer") {
    input = rockPaperScissors();
  }

  // If it is a draw.
  if (
    input == computerInput ||
    (input == "reversed rock" && computerInput == "rock") ||
    (input == "reversed scissors" && computerInput == "scissors") ||
    (input == "reversed paper" && computerInput == "paper")
  ) {
    playerDrawCounter = playerDrawCounter + 1;
    playerTotalCounter =
      playerWinCounter + playerLossCounter + playerDrawCounter;
    myOutputValue =
      "Hello " +
      playerUsername +
      "! The computer chose " +
      computerInput +
      ".<br>" +
      "You chose " +
      input +
      ".<br><br>" +
      "You draw! Wow!" +
      "<br><br>" +
      "So far you have been winning " +
      playerWinCounter +
      "/" +
      playerTotalCounter +
      ". Pretty alright!";
    koreanTieBreaker = recentWinner;
  }

  // Conditions for player to lose.
  if (
    (input == "rock" && computerInput == "paper") ||
    (input == "scissors" && computerInput == "rock") ||
    (input == "paper" && computerInput == "scissors") ||
    (input == "reversed rock" && computerInput == "scissors") ||
    (input == "reversed scissors" && computerInput == "paper") ||
    (input == "reversed paper" && computerInput == "rock") ||
    (versionInput == "korean" && koreanTieBreaker == "computer")
  ) {
    playerLossCounter = playerLossCounter + 1;
    playerTotalCounter =
      playerWinCounter + playerLossCounter + playerDrawCounter;
    myOutputValue =
      "Hello " +
      playerUsername +
      "! The computer chose " +
      computerInput +
      ".<br>" +
      "You chose " +
      input +
      ".<br><br>" +
      "You lose! Bummer." +
      "<br><br>" +
      "So far you have been winning " +
      playerWinCounter +
      "/" +
      playerTotalCounter +
      ". Pretty alright!";
    recentWinner = "computer";
  }

  // if you win.
  if (
    (input == "rock" && computerInput == "scissors") ||
    (input == "scissors" && computerInput == "paper") ||
    (input == "paper" && computerInput == "rock") ||
    (input == "reversed rock" && computerInput == "paper") ||
    (input == "reversed scissors" && computerInput == "rock") ||
    (input == "reversed paper" && computerInput == "scissors") ||
    (versionInput == "korean" && koreanTieBreaker == "player")
  ) {
    playerWinCounter = playerWinCounter + 1;
    playerTotalCounter =
      playerWinCounter + playerLossCounter + playerDrawCounter;
    myOutputValue =
      "Hello " +
      playerUsername +
      "! The computer chose " +
      computerInput +
      ".<br>" +
      "You chose " +
      input +
      ".<br><br>" +
      "You win! Woohoo!" +
      "<br><br>" +
      "So far you have been winning " +
      playerWinCounter +
      "/" +
      playerTotalCounter +
      ". Pretty good!";
    recentWinner = "player";
  }

  if (versionInput == "korean") {
    myOutputValue = "muk-jji-ppa! " + myOutputValue;
  }

  // console logs
  console.log("username: " + playerUsername);
  console.log("game mode: " + versionInput);
  console.log("computer choice: " + computerInput);
  console.log("previous winner: " + recentWinner);
  return myOutputValue;
};

var rockPaperScissors = function () {
  var randomInteger = Math.random() * 3;
  var computerInteger = Math.floor(randomInteger);
  var computerChoice = "";
  if (computerInteger == 0) {
    computerChoice = "rock";
  }
  if (computerInteger == 1) {
    computerChoice = "paper";
  }
  if (computerInteger == 2) {
    computerChoice = "scissors";
  }

  return computerChoice;
};
