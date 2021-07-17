var numUserWins = 0;
var numComputerWins = 0;
var numDraw = 0;

var currentGameMode = "waiting for username";
var userName = "";
var lastWinner = "";

var isReverseGame = false;
var isComputerAssisted = false;
var main = function (userChoice) {
  //game modes
  if (currentGameMode == "waiting for username") {
    userName = userChoice;
    currentGameMode = "Scissors paper stone";
    return `Hello ${userName}`;
  }
  if (userChoice == "reverse") {
    isReverseGame = !isReverseGame;
    return `Game mode reversed, please input`;
  }

  var computerMessage = "";
  if (userChoice == "cvc") {
    isComputerAssisted = !isComputerAssisted;
    computerMessage = `human will play for themself`;
    if (isComputerAssisted) {
      computerMessage = `Ok 🖥️ shall play for you the basic game of ✂️🧻🥌`;
    }
    return computerMessage;
  }

  if (isComputerAssisted) {
    userChoice = ComputerChoice();
  }
  //default
  var win = false;
  var computerChoice = ComputerChoice();
  if (
    !(
      userChoice == "scissors" ||
      userChoice == "paper" ||
      userChoice == "stone"
    )
  ) {
    return "this is not a valid input.<br> The three input for ✂️🧻🥌 are: <br>scissors<br>paper<br>stone ";
  }

  //draw condition applies for both normal game and reversed game
  if (computerChoice == userChoice) {
    win = null;
    numDraw++;
    if (lastWinner != "") {
      return `${lastWinner} is the winner of muk-jji-ppa!`;
    }
  }
  //normal game
  if (currentGameMode == "Scissors paper stone") {
    if (
      (computerChoice == "scissors" && userChoice == "stone") ||
      (computerChoice == "stone" && userChoice == "paper") ||
      (computerChoice == "paper" && userChoice == "scissors")
    ) {
      win = true;
    }
  }

  //reversed modes
  if (isReverseGame && win != null) {
    win = !win;
  }

  var output;
  //set last winner, assign string to output
  if (win == false) {
    lastWinner = "🖥️";
    numComputerWins++;
    output = "lose👻";
  } else if (win == true) {
    lastWinner = userName;
    numUserWins++;
    output = "win👾";
  } else {
    output = "draw😱";
  }
  var totalGames = numUserWins + numComputerWins;
  var specialMessage = `So far you've been winning ${numUserWins}/${totalGames}. Not bad!`;
  if (numUserWins < numComputerWins) {
    var specialMessage = `So far you've been winning ${numUserWins}/${totalGames}. 🖥️ is luckier than you! `;
  }

  return `${userName} ${output} with ${userChoice} against ${computerChoice}<br>${userName} has ${numUserWins} wins vs the 🖥️ with ${numComputerWins} wins! With ${numDraw} draws <br>${specialMessage} `;
};
///fodsfhfdspf
var ComputerChoice = function () {
  var output = "scissors";
  var randomNum = Math.random() * 3;
  var randomInt = Math.floor(randomNum) + 1;
//dsfsdfjds
  if (randomInt == 2) {
    output = "paper";
  } else if (randomInt == 3) {
    output = "stone";
  }
  return output;
};
