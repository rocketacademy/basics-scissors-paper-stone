// Scissors = 1
// Paper = 2
// Stone = 3
// Paper > stone > Scissors > Paper
// 2 > 3 > 1 > 2
// input == diceroll, Draw
// testing git push
// Username function not added yet
// percentage not added properly
var generateRandomInteger = function (max) {
  var randomDecimal = Math.random() * max;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};
var gameMode = "Please enter your user name";
var userName = "";
var winCount = 0;
var drawCount = 0;
var lossCount = 0;
var winningPercentage = winCount / (winCount + lossCount + drawCount);
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
    myOutputValue = computerHand(userName, input);
    return message;
  }
};

var computerHand = generateRandomHand(userName, userGuess);
console.log("Computer chooses:" + computerHand);
var genericOutput = `Your hand: ${userGuess}. Computer's Hand: ${computerHand}.`;
if (userGuess == computerHand) {
  drawCount += 1;
  var message = `${genericOutput} DRAW!! <br> You have won ${winCount} times. <br> You have lost ${lossCount} times. <br> You have ${drawCount} draws. <br> Your winning percentage is ${winningPercentage}.`;
}
if (userGuess == "scissors" && computerHand == "paper") {
  winCount += 1;
  var message = `${genericOutput} WIN!!! <br> You have won ${winCount} times. <br> You have lost ${lossCount} times. <br> You have ${drawCount} draws. <br> Your winning percentage is ${winningPercentage}.`;
}
if (userGuess == "scissors" && computerHand == "stone") {
  lossCount += 1;
  var message = `${genericOutput} LOSE!! <br> You have won ${winCount} times. <br> You have lost ${lossCount} times. <br> You have ${drawCount} draws. <br> Your winning percentage is ${winningPercentage}.`;
}
if (userGuess == "paper" && computerHand == "stone") {
  winCount += 1;
  var message = `${genericOutput} WIN!!! <br> You have won ${winCount} times. <br> You have lost ${lossCount} times. <br> You have ${drawCount} draws. <br> Your winning percentage is ${winningPercentage}.`;
}
if (userGuess == "paper" && computerHand == "scissors") {
  lossCount += 1;
  var message = `${genericOutput} LOSE!! <br> You have won ${winCount} times. <br> You have lost ${lossCount} times. <br> You have ${drawCount} draws. <br> Your winning percentage is ${winningPercentage}.`;
}
if (userGuess == "stone" && computerHand == "scissors") {
  winCount += 1;
  var message = `${genericOutput} WIN!!! <br> You have won ${winCount} times. <br> You have lost ${lossCount} times. <br> You have ${drawCount} draws. <br> Your winning percentage is ${winningPercentage}.`;
}
if (userGuess == "stone" && computerHand == "paper") {
  lossCount += 1;
  var message = `${genericOutput} LOSE!! <br> You have won ${winCount} times. <br> You have lost ${lossCount} times. <br> You have ${drawCount} draws. <br> Your winning percentage is ${winningPercentage}.`;
}

if (userGuess == "rscissors" && computerHand == "paper") {
  lossCount += 1;
  var message = `${genericOutput} LOSE!! <br> You have won ${winCount} times. <br> You have lost ${lossCount} times. <br> You have ${drawCount} draws. <br> Your winning percentage is ${winningPercentage}.`;
}
if (userGuess == "rscissors" && computerHand == "stone") {
  winCount += 1;
  var message = `${genericOutput} WIN!!! <br> You have won ${winCount} times. <br> You have lost ${lossCount} times. <br> You have ${drawCount} draws. <br> Your winning percentage is ${winningPercentage}.`;
}
if (userGuess == "rpaper" && computerHand == "stone") {
  lossCount += 1;
  var message = `${genericOutput} LOSE!! <br> You have won ${winCount} times. <br> You have lost ${lossCount} times. <br> You have ${drawCount} draws. <br> Your winning percentage is ${winningPercentage}.`;
}
if (userGuess == "rpaper" && computerHand == "scissors") {
  winCount += 1;
  var message = `${genericOutput} WIN!!! <br> You have won ${winCount} times. <br> You have lost ${lossCount} times. <br> You have ${drawCount} draws. <br> Your winning percentage is ${winningPercentage}.`;
}
if (userGuess == "rstone" && computerHand == "scissors") {
  lossCount += 1;
  var message = `${genericOutput} LOSE!! <br> You have won ${winCount} times. <br> You have lost ${lossCount} times. <br> You have ${drawCount} draws. <br> Your winning percentage is ${winningPercentage}.`;
}
if (userGuess == "rstone" && computerHand == "paper") {
  winCount += 1;
  var message = `${genericOutput} WIN!!! <br> You have won ${winCount} times. <br> You have lost ${lossCount} times. <br> You have ${drawCount} draws. <br> Your winning percentage is ${winningPercentage}.`;
}
