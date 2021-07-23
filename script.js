var numOfUserWins = 0;
var numOfCompWins = 0;
var numOfTies = 0;

var currentGameMode = "waiting for username";
var userName = "";
// console.log("users name", nameOfUser);

var randomOutput = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  return randomInteger;
};
var randomNumber = randomOutput();
console.log("random number", randomNumber);

var main = function (input) {
  var myOutputValue = "";

  // do this if game mode is ...
  if (currentGameMode == "waiting for username") {
    //set the name
    userName = input;
    console.log("user name", userName);
    console.log("current game mode", currentGameMode);
    // now that we have the name, switch the mode
    console.log("current game mode", currentGameMode);
    myOutputValue = `Hello ${userName}`;
    currentGameMode = "SPS game";
  } else if (currentGameMode == "SPS game") {
    myOutputValue = "change game mode";
    var randomOutput = function () {
      var randomDecimal = Math.random() * 3;
      var randomInteger = Math.floor(randomDecimal);
      return randomInteger;
    };
    var randomNumber = randomOutput();
    console.log("random number", randomNumber);

    var computerPicks = "";

    if (randomNumber == 0) {
      computerPicks = "scissors";
    }
    if (randomNumber == 1) {
      computerPicks = "rock";
    }
    if (randomNumber == 2) {
      computerPicks = "paper";
    }

    console.log("computer picks", computerPicks);
    console.log("user input", input);

    if (
      (computerPicks == "scissors" && input == "paper") ||
      (computerPicks == "rock" && input == "scissors") ||
      (computerPicks == "paper" && input == "rock")
    ) {
      numOfCompWins = numOfCompWins + 1;
      myOutputValue = `Hello ${userName}! The computer chose ${computerPicks}. You chose ${input}. You Lost! The computer has won ${numOfCompWins}. You have won ${numOfUserWins}. There are ${numOfTies} number of ties.`;
    }

    if (
      (computerPicks == "paper" && input == "scissors") ||
      (computerPicks == "scissors" && input == "rock") ||
      (computerPicks == "rock" && input == "paper")
    ) {
      numOfUserWins = numOfUserWins + 1;
      myOutputValue = `Hello ${userName}! The computer chose ${computerPicks}. You chose ${input}. You Won! The computer has won ${numOfCompWins}. You have won ${numOfUserWins}. There are ${numOfTies} number of ties.`;
    }

    if (computerPicks == input) {
      numOfTies = numOfTies + 1;
      myOutputValue = `Hello ${userName}! The computer chose ${computerPicks}. You chose ${input}. It's a tie! The computer has won ${numOfCompWins}. You have won ${numOfUserWins}. There are ${numOfTies} number of ties.`;
    }
    // reversed game
    if (
      (computerPicks == "paper" && input == "reversed rock") ||
      (computerPicks == "scissors" && input == "reversed paper") ||
      (computerPicks == "rock" && input == "reversed scissors")
    ) {
      myOutputValue = `The computer chose ${computerPicks}. You chose ${input}. You Won!There are ${numOfTies} number of ties.`;
    }
    if (
      (computerPicks == "paper" && input == "reversed scissors") ||
      (computerPicks == "scissors" && input == "reversed rock") ||
      (computerPicks == "rock" && input == "reversed paper")
    ) {
      myOutputValue = `The computer chose ${computerPicks}. You chose ${input}. You Lost! There are ${numOfTies} number of ties.`;
    }
    if (
      (computerPicks == "paper" && input == "reversed paper") ||
      (computerPicks == "scissors" && input == "reversed scissors") ||
      (computerPicks == "rock" && input == "reversed rock")
    ) {
      myOutputValue = `The computer chose ${computerPicks}. You chose ${input}. It's A Tie! There are ${numOfTies} number of ties.`;
    }
  }
  return myOutputValue;
};
