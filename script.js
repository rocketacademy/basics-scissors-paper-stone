// var main = function (input) {
//   var myOutputValue = 'hello world';
//   return myOutputValue;
// };

//Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.

//Basic Scissors Paper Stone Base
var programGenerator = function () {
  var randomProgramGuess = generateRandomInteger();
  if (randomProgramGuess == 1) {
    return "scissors";
  }
  if (randomProgramGuess == 2) {
    return "paper";
  }
  if (randomProgramGuess == 3) {
    return "stone";
  }
  return "oops try another one";
};

var main = function (userGuess) {
  //Validation
  if (
    userGuess != "stone" &&
    userGuess != "paper" &&
    userGuess != "scissors" &&
    userGuess != "reversed stone" &&
    userGuess != "reversed paper" &&
    userGuess != "reversed scissors"
  ) {
    return userGuess + " error, plese try again";
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

  var programGuess = programGenerator();
  if (userGuess == programGuess) {
    return "it's draw";
  }
  if (userGuess == "scissors" && programGuess == "paper" && !isReversed) {
    //return userGuess + " VS " + programGuess + " you win";
    return "You chose scissors ✂️." + " VS " + programGuess + " you win";
  }
  if (userGuess == "scissors" && programGuess == "paper" && isReversed) {
    //return userGuess + " VS " + programGuess + " you win";
    return "You chose scissors ✂️." + " VS " + programGuess + " you lose";
  }
  if (userGuess == "scissors" && programGuess == "stone" && !isReversed) {
    //return userGuess + " VS " + programGuess + " you lose";
    return "You chose scissors ✂️." + " VS " + programGuess + " you lose";
  }
  if (userGuess == "scissors" && programGuess == "stone" && isReversed) {
    //return userGuess + " VS " + programGuess + " you lose";
    return "You chose scissors ✂️." + " VS " + programGuess + " you win";
  }

  if (userGuess == "paper" && programGuess == "stone" && !isReversed) {
    return userGuess + " VS " + programGuess + " you win";
  }
  if (userGuess == "paper" && programGuess == "stone" && isReversed) {
    return userGuess + " VS " + programGuess + " you lose";
  }
  if (userGuess == "paper" && programGuess == "scissors" && !isReversed) {
    return userGuess + " VS " + programGuess + " you lose";
  }
  if (userGuess == "paper" && programGuess == "scissors" && isReversed) {
    return userGuess + " VS " + programGuess + " you win";
  }
  if (userGuess == "stone" && programGuess == "paper" && !isReversed) {
    return userGuess + " VS " + programGuess + " you lose";
  }
  if (userGuess == "stone" && programGuess == "paper" && isReversed) {
    return userGuess + " VS " + programGuess + " you win";
  }
  if (userGuess == "stone" && programGuess == "scissors" && !isReversed) {
    return userGuess + " VS " + programGuess + " you win";
  }
  if (userGuess == "stone" && programGuess == "scissors" && isReversed) {
    return userGuess + " VS " + programGuess + " you lose";
  }
};

var generateRandomInteger = function (max) {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};
