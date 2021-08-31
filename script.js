//function
var generateRandomInteger = function (max) {
  var randomDecimal = Math.random() * max;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

//global
var gameMode = "Please enter your user name";
var userName = "";
var winCount = 0;
var drawCount = 0;
var lossCount = 0;
var totalGames = 0;

//function
var generateRandomHand = function () {
  var handType = 3;
  var randomHandType = generateRandomInteger(handType);
  if (randomHandType == 1) {
    return "scissors";
  }
  // "else if" is implied in the following if statements because we return in each if statement.
  if (randomHandType == 2) {
    return "paper";
  }
  if (randomHandType == 3) {
    return "stone";
  }
  console.log();
};

var main = function (input) {
  var myOutputValue = "";
  if (gameMode == "Please enter your user name") {
    userName = input;
    gameMode = "GAME ON";
    return `Hello ${userName}, are you ready to play?`;
  } else if (gameMode == "GAME ON") {
    randomHandType = generateRandomHand();
    message = getComputerHand(randomHandType, input);
    return message;
  }
};

//this is where you're defining computerHand as a function. missing 'function' in line 50
var getComputerHand = function (computerHand, userGuess) {
  console.log("Computer chooses:" + computerHand);
  totalGames = totalGames + 1;
  var genericOutput = `Your hand: ${userGuess}. Computer's Hand: ${computerHand}.`;
  if (userGuess == computerHand) {
    drawCount += 1;
    winningPercentage = (winCount / totalGames) * 100;
    var message = `${genericOutput} DRAW!! <br> You have won ${winCount} times. <br> You have lost ${lossCount} times. <br> You have ${drawCount} draws. <br> Your winning percentage is ${winningPercentage}%`;
  }
  if (userGuess == "scissors" && computerHand == "paper") {
    winCount += 1;
    winningPercentage = (winCount / totalGames) * 100;
    var message = `${genericOutput} WIN!!! <br> You have won ${winCount} times. <br> You have lost ${lossCount} times. <br> You have ${drawCount} draws. <br> Your winning percentage is ${winningPercentage}%`;
  }
  if (userGuess == "scissors" && computerHand == "stone") {
    lossCount += 1;
    winningPercentage = (winCount / totalGames) * 100;
    var message = `${genericOutput} LOSE!! <br> You have won ${winCount} times. <br> You have lost ${lossCount} times. <br> You have ${drawCount} draws. <br> Your winning percentage is ${winningPercentage}%`;
  }
  if (userGuess == "paper" && computerHand == "stone") {
    winCount += 1;
    winningPercentage = (winCount / totalGames) * 100;
    var message = `${genericOutput} WIN!!! <br> You have won ${winCount} times. <br> You have lost ${lossCount} times. <br> You have ${drawCount} draws. <br> Your winning percentage is ${winningPercentage}%`;
  }
  if (userGuess == "paper" && computerHand == "scissors") {
    lossCount += 1;
    winningPercentage = (winCount / totalGames) * 100;
    var message = `${genericOutput} LOSE!! <br> You have won ${winCount} times. <br> You have lost ${lossCount} times. <br> You have ${drawCount} draws. <br> Your winning percentage is ${winningPercentage}%`;
  }
  if (userGuess == "stone" && computerHand == "scissors") {
    winCount += 1;
    winningPercentage = (winCount / totalGames) * 100;
    var message = `${genericOutput} WIN!!! <br> You have won ${winCount} times. <br> You have lost ${lossCount} times. <br> You have ${drawCount} draws. <br> Your winning percentage is ${winningPercentage}%`;
  }
  if (userGuess == "stone" && computerHand == "paper") {
    lossCount += 1;
    winningPercentage = (winCount / totalGames) * 100;
    var message = `${genericOutput} LOSE!! <br> You have won ${winCount} times. <br> You have lost ${lossCount} times. <br> You have ${drawCount} draws. <br> Your winning percentage is ${winningPercentage}%`;
  }

  if (userGuess == "rscissors" && computerHand == "paper") {
    lossCount += 1;
    winningPercentage = (winCount / totalGames) * 100;
    var message = `${genericOutput} LOSE!! <br> You have won ${winCount} times. <br> You have lost ${lossCount} times. <br> You have ${drawCount} draws. <br> Your winning percentage is ${winningPercentage}%`;
  }
  if (userGuess == "rscissors" && computerHand == "stone") {
    winCount += 1;
    winningPercentage = (winCount / totalGames) * 100;
    var message = `${genericOutput} WIN!!! <br> You have won ${winCount} times. <br> You have lost ${lossCount} times. <br> You have ${drawCount} draws. <br> Your winning percentage is ${winningPercentage}%`;
  }
  if (userGuess == "rpaper" && computerHand == "stone") {
    lossCount += 1;
    winningPercentage = (winCount / totalGames) * 100;
    var message = `${genericOutput} LOSE!! <br> You have won ${winCount} times. <br> You have lost ${lossCount} times. <br> You have ${drawCount} draws. <br> Your winning percentage is ${winningPercentage}%`;
  }
  if (userGuess == "rpaper" && computerHand == "scissors") {
    winCount += 1;
    winningPercentage = (winCount / totalGames) * 100;
    var message = `${genericOutput} WIN!!! <br> You have won ${winCount} times. <br> You have lost ${lossCount} times. <br> You have ${drawCount} draws. <br> Your winning percentage is ${winningPercentage}%`;
  }
  if (userGuess == "rstone" && computerHand == "scissors") {
    lossCount += 1;
    winningPercentage = (winCount / totalGames) * 100;
    var message = `${genericOutput} LOSE!! <br> You have won ${winCount} times. <br> You have lost ${lossCount} times. <br> You have ${drawCount} draws. <br> Your winning percentage is ${winningPercentage}%`;
  }
  if (userGuess == "rstone" && computerHand == "paper") {
    winCount += 1;
    winningPercentage = (winCount / totalGames) * 100;
    var message = `${genericOutput} WIN!!! <br> You have won ${winCount} times. <br> You have lost ${lossCount} times. <br> You have ${drawCount} draws. <br> Your winning percentage is ${winningPercentage}%`;
  }
  return message;
};
