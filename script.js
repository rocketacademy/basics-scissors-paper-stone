var numOne = 0;
var numTwo = 0;
var numThree = 0;
var numFour = 0;
var numFive = 0;
var numSix = 0;
var prevRoll = 0;
var numOfWin = 0;
var numOfLoss = 0;
var numOfGame = 0;
var points = 0;
var result = "";
var lossRate = 0;
var winRate = 0;
var currentGameMode = "waiting for user name";
var userName = "";
var userGuess = 0;

var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var diceGame = function (userName, userGuess) {
  var message = "";
  var randomDiceNumber = rollDice();
  numOfGame = numOfGame + 1;
  // determine if this is the first roll
  if (prevRoll == 0) {
    message = `Hi ${userName}! This is your first roll! `;
    console.log(message);
  } else {
    message = `Hi ${userName}! Your last roll was ${prevRoll}.`;
  }
  // determine it is a win/loss
  if (randomDiceNumber == userGuess) {
    numOfWin = numOfWin + 1;
    result = "win";
  } else {
    numOfLoss = numOfLoss + 1;
    result = "lose";
  }
  winRate = ((numOfWin / numOfGame) * 100).toFixed(0) + `%`;
  lossRate = ((numOfLoss / numOfGame) * 100).toFixed(0) + `%`;
  message += `You just rolled a ${randomDiceNumber}. You guessed ${userGuess}. You ${result}! <br>
  You win ${numOfWin} out of ${numOfGame}. Win rate = ${winRate}.<br>
  You lose ${numOfLoss} out of ${numOfGame}. Loss rate = ${lossRate}.<br>`;
  console.log(message);
  prevRoll = randomDiceNumber;
  // determine which is the most rolled number

  if (randomDiceNumber == 1) {
    numOne = numOne + 1;
  }

  if (randomDiceNumber == 2) {
    numTwo = numTwo + 1;
  }

  if (randomDiceNumber == 3) {
    numThree = numThree + 1;
  }

  if (randomDiceNumber == 4) {
    numFour = numFour + 1;
  }

  if (randomDiceNumber == 5) {
    numFive = numFive + 1;
  }

  if (randomDiceNumber == 6) {
    numSix = numSix + 1;
  }

  var rollCountNum = [numOne, numTwo, numThree, numFour, numFive, numSix];
  var winnerNum = -1,
    winners = []; // define winners as an array
  for (var i = 0; i < rollCountNum.length; i++) {
    if (rollCountNum[i] > winnerNum) {
      winners = [i + 1];
      winnerNum = rollCountNum[i];
    } else if (rollCountNum[i] == winnerNum) {
      //Use else if to specify a new condition to test, if the first condition is false
      winners.push(i + 1);
    }
  }
  if (winners.length == 1) {
    message += `The most rolled number is number ${winners[0]}! <br>`;
  } else {
    message += `The most rolled numbers are  numbers ${winners.join(
      ", "
    )}! <br>`;
  }

  // calculate the total points
  if (randomDiceNumber - userGuess == 1 || userGuess - randomDiceNumber == 1) {
    points = points + 1;
  } else if (randomDiceNumber == userGuess) {
    points = points + 2;
  }
  return (message += `Total winning points = ${points}.`);
};

var main = function (input) {
  var myOutputValue = "";

  if (currentGameMode == "waiting for user name") {
    userName = input;
    //validation
    if (Number.isNaN(Number(input)) == false) {
      myOutputValue = "sorry please enter a name.";
      //validation
    } else {
      currentGameMode = "dice game";
      myOutputValue = `Hello ${userName}`;
    }
  } else if (currentGameMode == "dice game") {
    //validation
    if (Number.isNaN(Number(input)) == true || input > 6 || input < 1) {
      myOutputValue = "sorry please enter a number between 1 - 6.";
      //validation
    } else {
      myOutputValue = diceGame(userName, input);
    }
  }
  return myOutputValue;
};
