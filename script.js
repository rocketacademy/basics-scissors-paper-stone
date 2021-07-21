//Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.

// [Part 02] Add state to your program such that it keeps track of the number of times the user has won and the number of times the computer has won. Output this win-loss record in a format you like in the program output. You can also output the number of draws and/or each party's winning percentage if you'd like.

//Global variables
var comScore = 0;
var userScore = 0;
var totalPlays = 0;

// Randomise what the computer chooses from "Scissors, Paper + Stone".
var randomAction = function () {
  // Generate a number from 0 through 3, inclusive of 0 and exclusive of 3
  var randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    var computerChoose = "scissors"; //Assigning a number to each of the action. Eg. Scissors = 0, Paper = 1, Stone = 2
  }
  if (randomNumber == 1) {
    var computerChoose = "paper";
  }
  if (randomNumber == 2) {
    var computerChoose = "stone";
  }
  return computerChoose;
};

var main = function (input) {
  var aiChoose = randomAction();
  console.log("computer chooses " + aiChoose);
  var userChoose = input;
  console.log("user chooses " + userChoose);
  var myOutputValue = "Please input something"; //If it doesn't match with anything on top
  if (input == "score check") {
    myOutputValue =
      " You have won " + userScore + " out of " + totalPlays + " times";
  }
  if (userChoose == aiChoose) {
    myOutputValue = "It's a draw.";
  }
  if (
    (userChoose == "scissors" && aiChoose == "stone") || //Computer wins User
    (userChoose == "paper" && aiChoose == "scissors") ||
    (userChoose == "stone" && aiChoose == "paper")
  ) {
    myOutputValue = "You have lost";
    totalPlays = totalPlays + 1;
    comScore = comScore + 1;
    console.log(comScore);
  }
  if (
    (userChoose == "stone" && aiChoose == "scissors") || // User wins Computer
    (userChoose == "scissors" && aiChoose == "paper") ||
    (userChoose == "paper" && aiChoose == "stone")
  ) {
    totalPlays = totalPlays + 1;
    userScore = userScore + 1;
    console.log(userScore);
    myOutputValue = "You have won! You have won " + userScore + " times";
  }

  return myOutputValue;
};
