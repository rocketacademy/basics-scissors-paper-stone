var currentGameMode = "Please key in your name.";
var userName = "";
var numberOfWins = 0;
var numberOfLose = 0;

var main = function (input) {
  var myOutputValue = "";
  if (currentGameMode == "Please key in your name.") {
    userName = input;
    currentGameMode = "dice game";
    myOutputValue = "Hello " + userName + "!";
  } else if (currentGameMode == "dice game") {
    if (input != "Scissors" && input != "Stone" && input != "Paper") {
      return "Invalid input. Please select either 'Scissors', 'Paper', or 'Stone'.";
    }
    var gameOutput = randomSPS();
    console.log(gameOutput);
    if (input == gameOutput) {
      myOutputValue = "It is a draw!";
    } else if (
      (input == "Scissors" && gameOutput == "Paper") ||
      (input == "Paper" && gameOutput == "Stone") ||
      (input == "Stone" && gameOutput == "Scissors")
    ) {
      numberOfWins = numberOfWins + 1;
      myOutputValue = "You won!";
    } else {
      numberOfLose = numberOfLose + 1;
      myOutputValue = "The program won!";
    }
    myOutputValue = `The computer chose ${gameOutput}.<br> You chose ${input}. <br><br> ${myOutputValue}<br><br> Computer: ${numberOfLose} <br> ${userName}: ${numberOfWins}`;
  }
  return myOutputValue;
};
var randomSPS = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  if (diceNumber == 1) {
    return "Scissors";
  }
  if (diceNumber == 2) {
    return "Paper";
  }
  if (diceNumber == 3) {
    return "Stone";
  }
};
