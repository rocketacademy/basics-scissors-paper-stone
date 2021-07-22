// var main = function (input) {
//   var myOutputValue = 'hello world';
//   return myOutputValue;
// };

//Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.

//Basic Scissors Paper Stone Base
var numOfUserWinning = 0;
var numOfProgramWinnning = 0;
var numOfDraws = 0;
var isGameStarted = false;
var userName = "";

var main = function (input) {
  if (!isGameStarted) {
    return startGame(input);
  }
  return gameTime(input);
};
var startGame = function (userName) {
  if (userName == "") {
    return "please input a username :) ";
  }
  isGameStarted = true;
  return "hello " + userName + " lets start the game! ";
};
var gameTime = function (userGuess) {
  //Validation
  if (
    userGuess != "stone" &&
    userGuess != "paper" &&
    userGuess != "scissors" &&
    userGuess != "reversed stone" &&
    userGuess != "reversed paper" &&
    userGuess != "reversed scissors"
  ) {
    return userGuess + " error, please input scissors / paper / stone ";
  }

  var isReversed = true;
  if (userGuess == "stone" || userGuess == "paper" || userGuess == "scissors") {
    isReversed = false;
  }

  if (userGuess == "reversed stone") {
    userGuess = "stone";
  }
  if (userGuess == "reversed paper") {
    userGuess = "paper";
  }
  if (userGuess == "reversed scissors") {
    userGuess = "scissors";
  }

  var programGuess = generateRandomHand();

  if (userGuess == programGuess) {
    numOfDraws += 1;
    return "it's draw, you guess draw for " + numOfDraws + " times";
  }
  if (userGuess == "scissors" && programGuess == "paper" && !isReversed) {
    //return userGuess + " VS " + programGuess + " you win";
    numOfUserWinning += 1;
    return (
      "You chose scissors ✂️." +
      " VS " +
      programGuess +
      " you win, your score is " +
      numOfUserWinning +
      " computer score is " +
      numOfProgramWinnning
    );
  }
  if (userGuess == "scissors" && programGuess == "paper" && isReversed) {
    //return userGuess + " VS " + programGuess + " you win";
    numOfProgramWinnning += 1;
    return (
      "You chose scissors ✂️." +
      " VS " +
      programGuess +
      " you lose, your score is " +
      numOfUserWinning +
      " computer score is " +
      numOfProgramWinnning
    );
  }
  if (userGuess == "scissors" && programGuess == "stone" && !isReversed) {
    //return userGuess + " VS " + programGuess + " you lose";
    numOfProgramWinnning += 1;
    return (
      "You chose scissors ✂️." +
      " VS " +
      programGuess +
      " you lose, your score is " +
      numOfUserWinning +
      " computer score is " +
      numOfProgramWinnning
    );
  }
  if (userGuess == "scissors" && programGuess == "stone" && isReversed) {
    //return userGuess + " VS " + programGuess + " you lose";
    numOfUserWinning += 1;
    return (
      "You chose scissors ✂️." +
      " VS " +
      programGuess +
      " you win, your score is " +
      numOfUserWinning +
      " computer score is " +
      numOfProgramWinnning
    );
  }
  if (userGuess == "paper" && programGuess == "stone" && isReversed) {
    numOfProgramWinnning += 1;
    return (
      userGuess +
      " VS " +
      programGuess +
      " you lose, your score is " +
      numOfUserWinning +
      " computer score is " +
      numOfProgramWinnning
    );
  }
  if (userGuess == "paper" && programGuess == "stone" && isReversed) {
    numOfProgramWinnning += 1;
    return (
      userGuess +
      " VS " +
      programGuess +
      " you lose, your score is " +
      numOfUserWinning +
      " computer score is " +
      numOfProgramWinnning
    );
  }
  if (userGuess == "paper" && programGuess == "scissors" && isReversed) {
    numOfUserWinning += 1;
    return (
      userGuess +
      " VS " +
      programGuess +
      " you win, your score is " +
      numOfUserWinning +
      " computer score is " +
      numOfProgramWinnning
    );
  }

  if (userGuess == "paper" && programGuess == "stone" && !isReversed) {
    numOfUserWinning += 1;
    return (
      userGuess +
      " VS " +
      programGuess +
      " you win, your score is " +
      numOfUserWinning +
      " computer score is " +
      numOfProgramWinnning
    );
  }

  if (userGuess == "paper" && programGuess == "scissors" && !isReversed) {
    numOfProgramWinnning += 1;
    return (
      userGuess +
      " VS " +
      programGuess +
      " you lose, your score is " +
      numOfUserWinning +
      " computer score is " +
      numOfProgramWinnning
    );
  }

  if (userGuess == "stone" && programGuess == "paper" && !isReversed) {
    numOfProgramWinnning += 1;
    return (
      userGuess +
      " VS " +
      programGuess +
      " you lose,your score is " +
      numOfUserWinning +
      " computer score is " +
      numOfProgramWinnning
    );
  }
  if (userGuess == "stone" && programGuess == "paper" && isReversed) {
    numOfUserWinning += 1;
    return (
      userGuess +
      " VS " +
      programGuess +
      " you win,your score is " +
      numOfUserWinning +
      " computer score is " +
      numOfProgramWinnning
    );
  }
  if (userGuess == "stone" && programGuess == "scissors" && !isReversed) {
    numOfUserWinning += 1;

    return (
      userGuess +
      " VS " +
      programGuess +
      " you win,your score is " +
      numOfUserWinning +
      " computer score is " +
      numOfProgramWinnning
    );
  }

  return userGuess + " VS " + programGuess + " you lose";
};

var generateRandomHand = function () {
  var randomProgramGuess = generateRandomInteger(3);
  if (randomProgramGuess == 1) {
    return "scissors";
  } else if (randomProgramGuess == 2) {
    return "paper";
  }
  return "stone";
};

var generateRandomInteger = function (max) {
  var randomDecimal = Math.random() * max;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};
