var currentGameMode = "waiting for user name";
var userName = "";
var userScore = 0;
var compScore = 0;
var drawScore = 0;

var main = function (input) {
  var myOutputValue = "";

  if (currentGameMode == "waiting for user name") {
    //set the name
    userName = input;

    //now that we have the name; switch the mode
    currentGameMode = "SPS game";

    myOutputValue = `Hello ${userName}`;
  } else if (currentGameMode == "SPS game") {
    var randomChoice = randomNumber();
    var compChoice = "";

    //computer logic
    if (randomChoice == 1) {
      compChoice = "stone";
    }
    if (randomChoice == 2) {
      compChoice = "paper";
    }
    if (randomChoice == 3) {
      compChoice = "scissors";
    }

    var myOutputValue = `Haha ${userName}, lets enter only Scissors, Paper, or Stone!`;

    //it's a draw
    if (input == compChoice) {
      drawScore = drawScore + 1;
      myOutputValue = `it's a draw! you entered ${input} and the computer choice is ${compChoice}! The total amount of draw is ${drawScore}`;
    }
    //you win
    if (
      (input == "scissors" && compChoice == "paper") ||
      (input == "paper" && compChoice == "stone") ||
      (input == "stone" && compChoice == "scissors")
    ) {
      myOutputValue = `you win ${userName}! you entered ${input} and the computer choice is ${compChoice}! <br> So far your winning score is ${(userScore =
        userScore + 1)}. Pretty good`;
    }
    //you lose
    if (
      (input == "scissors" && compChoice == "stone") ||
      (input == "paper" && compChoice == "scissors") ||
      (input == "stone" && compChoice == "paper")
    ) {
      myOutputValue = `you lose ${userName}! you entered ${input} and the computer choice is ${compChoice}! Comp score is ${(compScore =
        compScore + 1)}.`;
    }
  }
  return myOutputValue;
};

var randomNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  return randomInteger + 1;
};
