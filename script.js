//Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.

//Global variables
var currentGameMode = "waiting for user name";
var userName = "";
var comScore = 0;
var userScore = 0;
var totalPlays = 0;
var aiChoose = 0;
var userChoose = 0;

/// Com play SPS action Function ///
//Assigning a number to each of the action. Eg. Scissors = 0, Paper = 1, Stone = 2
var comPlays = function () {
  var randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    var computerChoose = "scissors";
  }
  if (randomNumber == 1) {
    var computerChoose = "paper";
  }
  if (randomNumber == 2) {
    var computerChoose = "stone";
  }
  return computerChoose;
};

/// Normal SPS game mode ///

var normalSPS = function (userChoose) {
  //Telling the user SPS game mode.
  var myOutputValue =
    "You are now playing Scissors Paper Stone. <br><br> Please input either 'Scissors', 'Paper' or 'Stone'. ";
  var aiChoose = comPlays();
  console.log("Com chooses " + aiChoose);
  console.log("user chooses " + userChoose);
  // If player chooses the same as the computer

  if (userChoose == aiChoose) {
    myOutputValue = "It's a draw.";
  }
  // If Com wins user
  else if (
    (userChoose == "scissors" && aiChoose == "stone") ||
    (userChoose == "paper" && aiChoose == "scissors") ||
    (userChoose == "stone" && aiChoose == "paper")
  ) {
    myOutputValue = "You have lost";
    totalPlays = totalPlays + 1;
    comScore = comScore + 1;
    console.log(comScore);
  }
  // If User wins computer
  else if (
    (userChoose == "stone" && aiChoose == "scissors") ||
    (userChoose == "scissors" && aiChoose == "paper") ||
    (userChoose == "paper" && aiChoose == "stone")
  ) {
    totalPlays = totalPlays + 1;
    userScore = userScore + 1;
    console.log(userScore);
    myOutputValue = "You have won! <br> You have won " + userScore + " times";
  }
  return myOutputValue;
};

/// Reverse SPS game mode ///
var reverseSPS = function (userChoose, aiChoose) {
  if (userChoose == aiChoose) {
    myOutputValue = "It's a draw.";
  }
  if (
    (userChoose == "stone" && aiChoose == "scissors") || //Computer wins User
    (userChoose == "scissors" && aiChoose == "paper") ||
    (userChoose == "paper" && aiChoose == "stone")
  ) {
    myOutputValue = "Aww. You have lost";
    totalPlays = totalPlays + 1;
    comScore = comScore + 1;
    console.log(comScore);
  }
  if (
    (userChoose == "scissors" && aiChoose == "stone") || // User wins Computer
    (userChoose == "paper" && aiChoose == "scissors") ||
    (userChoose == "stone" && aiChoose == "paper")
  ) {
    totalPlays = totalPlays + 1;
    userScore = userScore + 1;
    console.log(userScore);
    myOutputValue =
      "You have won! <br><br> You have won " + userScore + " times";
  }
  return myOutputValue;
};

var main = function (input) {
  var myOutputValue = "";
  input = input.toLowerCase();
  /// Creating a username ///
  if (currentGameMode == "waiting for user name") {
    userName = input;
    console.log("Hi " + userName);
    myOutputValue =
      "Hi " +
      userName +
      " <br><br> Please Choose a mode. <br> <br>''Normal' or ' Reverse' ";

    /// Choosing a game mode ///
    currentGameMode = "choosing Game Mode";
  }

  if (currentGameMode == "choosing Game Mode") {
    if (input == "normal") {
      currentGameMode = "normal";
      myOutputValue = normalSPS(input);
    } else if (input == "reverse") {
      currentGameMode = "reverse";
      myOutputValue = reverseSPS(input);
    }
    console.log("Current game mode " + currentGameMode);
  }
  return myOutputValue;
};

// ///  Checking your score ///
// if (input == "score check") {
//   myOutputValue =
//     " You have won " + userScore + " out of " + totalPlays + " times";
//}
