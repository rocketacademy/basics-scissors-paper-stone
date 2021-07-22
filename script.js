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
var normalSPS = function (input) {
  var aiChoose = randomAction();
  console.log("computer chooses " + aiChoose);
  var userChoose = input;
  console.log("user chooses " + userChoose);
  var myOutputValue =
    "You are now playing Scissors Paper Stone. <br> Please input either 'Scissors'/ 'Paper' / 'Stone'. "; //Telling the user SPS game mode.

  if (input == "Normal") {
    currentGameMode = "Normal";
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
    myOutputValue = "You have won! <br> You have won " + userScore + " times";
  }
  return myOutputValue;
};

/// Reverse SPS game mode ///
var reverseSPS = function (input) {
  if (input == "Normal") {
    currentGameMode = "Normal";
  }
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
    myOutputValue = "You have won! <br> You have won " + userScore + " times";
  }
  return myOutputValue;
};

// /// Korean SPS game mode ///
// var koreanSPS = function (input) {
//   if (input == "Normal") {
//     currentGameMode = "Normal";
//   }
//   if (userChoose == aiChoose) {
//     myOutputValue = "It's a draw.";
//   }
//   if (
//     (userChoose == "stone" && aiChoose == "scissors") || //Computer wins User
//     (userChoose == "scissors" && aiChoose == "paper") ||
//     (userChoose == "paper" && aiChoose == "stone")
//   ) {
//     myOutputValue = "Aww. You have lost";
//     totalPlays = totalPlays + 1;
//     comScore = comScore + 1;
//     console.log(comScore);
//   }
//   if (
//     (userChoose == "scissors" && aiChoose == "stone") || // User wins Computer
//     (userChoose == "paper" && aiChoose == "scissors") ||
//     (userChoose == "stone" && aiChoose == "paper")
//   ) {
//     totalPlays = totalPlays + 1;
//     userScore = userScore + 1;
//     console.log(userScore);
//     myOutputValue = "You have won! <br> You have won " + userScore + " times";
//   }
//   return myOutputValue;
// };

// /// Choosing which game mode to play ///
// var gameMode = function (input) {
//   if (input == "Normal") {
//     currentGameMode = "Normal";
//     normalSPS();
//   }
//   if (input == "Computer") {
//     currentGameMode = "Computer";
//   }
//   if (input == "Korean") {
//     currentGameMode = "Korean";
//   }
//   if (input == "Reverse") {
//     currentGameMode = "Reverse";
//     reverseSPS();
//   }
// };

var main = function (input) {
  var myOutputValue = "";
  var input = input.toLowerCase();
  /// Creating a username ///
  if (currentGameMode == "waiting for user name") {
    userName = input;
    console.log("Hi " + userName);
    myOutputValue =
      "Hi " +
      userName +
      " <br> Please Choose a mode. ''Normal' / 'Computer' / 'Korean' /' Reverse' ";

    /// Choosing a game mode ///
    currentGameMode = "choosing Game Mode";
  }

  if (currentGameMode == "choosing Game Mode") {
    //myOutputValue =;
    if (input == "Normal") {
      currentGameMode = "Normal";
      console.log(currentGameMode);
      //normalSPS();
    }
    if (input == "Computer") {
      currentGameMode = "Computer";
    }
    if (input == "Korean") {
      currentGameMode = "Korean";
    }
    if (input == "Reverse") {
      currentGameMode = "Reverse";
      //reverseSPS();
    }
    console.log("Current game mode " + currentGameMode);
  }

  ///  Checking your score ///
  if (input == "score check") {
    myOutputValue =
      " You have won " + userScore + " out of " + totalPlays + " times";
  }
  return myOutputValue;
};
