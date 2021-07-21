var aiWins = 0;
var userWins = 0;
var totalGames = 0;
var gameType = "UserName";
console.log(gameType);

var main = function (input) {
  var myOutputValue = "";

  if (gameType == "UserName") {
    gameType = "Basic";
    myOutPutValue = "Hello " + input;
  }

  if (gameType == "Basic") {
    var randomHand = calRandomHand();
    console.log(randomHand);
  }
  if (
    (randomHand == "Paper" && input == "Scissors") ||
    (randomHand == "Scissors" && input == "Stone") ||
    (randomHand == "Stone" && input == "Paper")
  ) {
    userWins = userWins + 1;
    myOutputValue =
      "You picked " +
      input +
      "<br></br>" +
      " Whereas we picked " +
      randomHand +
      "<br></br>" +
      " You Won! AI Wins:" +
      aiWins +
      " UserWins:" +
      userWins;
  } else if (input == randomHand) {
    myOutputValue = myOutputValue =
      "You picked " +
      input +
      "<br></br>" +
      " Whereas we picked " +
      randomHand +
      "<br></br>" +
      " DRAW! AI Wins:" +
      aiWins +
      " UserWins:" +
      userWins;
  } else {
    aiWins = aiWins + 1;
    myOutputValue =
      " You picked " +
      input +
      "<br></br>" +
      " Whereas we picked " +
      randomHand +
      "<br></br>" +
      " You lost, please try again! AI Wins:" +
      aiWins +
      " UserWins:" +
      userWins;
  }
  return myOutputValue;
};

var calRandomNum = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randomNumber = randomInteger + 1;
  return randomNumber;
};

var calRandomHand = function () {
  var totalNumVariables = 3;
  var randomVariable = calRandomNum(totalNumVariables);

  if (randomVariable == 1) {
    return "Scissors";
  }
  if (randomVariable == 2) {
    return "Stone";
  }
  if (randomVariable == 3) {
    return "Paper";
  }
  return "Please try again.";
};

var calReversedSPS = function (input) {
  var myOutPutValue = "";
  var reversedRandomHand = calRandomHand();

  if (
    (input == "reversed Scissors" && reversedRandomHand == "Stone") ||
    (input == "reversed Paper" && reversedRandomHand == "Scissors") ||
    (input == "reversed Stone" && reversedRandomHand == "Paper")
  ) {
    userWins = userWins + 1;
    myOutPutValue =
      "You picked " +
      input +
      "<br></br>" +
      " Whereas we picked " +
      randomHand +
      "<br></br>" +
      " You Won! AI Wins:" +
      aiWins +
      " UserWins:" +
      userWins;
  } else if (
    (input == " reversed Scissors" && reversedRandomHand == "Scissors") ||
    (input == "reversed Paper" && reversedRandomHand == "Paper") ||
    (input == "reversed Stone" && reversedRandomHand == "Stone")
  ) {
    myOutputValue = myOutputValue =
      "You picked " +
      input +
      "<br></br>" +
      " Whereas we picked " +
      randomHand +
      "<br></br>" +
      " DRAW! AI Wins:" +
      aiWins +
      " UserWins:" +
      userWins;
  } else if (input == reversedRandomHand) {
    aiWins = aiWins + 1;
    myOutputValue =
      " You picked " +
      input +
      "<br></br>" +
      " Whereas we picked " +
      randomHand +
      "<br></br>" +
      " You lost, please try again! AI Wins:" +
      aiWins +
      " UserWins:" +
      userWins;
  }
  return myOutPutValue;
};
