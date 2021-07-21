// Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw. Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.

// Define 'scissors', 'paper', and 'stone' as variables
var scissors = "scissors";
var paper = "paper";
var stone = "stone";

// Add variable for win/lose game state
var winCount = 0;
var loseCount = 0;
var drawCount = 0;

// Create Random Scissors Paper Stone result
var getSpsResult = function () {
  // Generate a random decimal from 0 through 3, inclusive of 0 and exclusive of 3.
  var randomDecimal = Math.random() * 3;
  console.log("randomDecimal");
  console.log(randomDecimal);

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 2 inclusive.
  var spsNumberValue = Math.floor(randomDecimal);
  console.log("spsNumberValue");
  console.log(spsNumberValue);

  // Assign the random numbers generated to the words "scissors", "paper", or "stone"
  var spsResult = "scissors, paper, or stone";

  if (spsNumberValue == 0) {
    spsResult = scissors;
  }
  if (spsNumberValue == 1) {
    spsResult = paper;
  }
  if (spsNumberValue == 2) {
    spsResult = stone;
  }
  console.log("spsResult");
  console.log(spsResult);

  // Return getSpsResult function's output which is the spsResult
  return spsResult;
};

var WinLoseHistory = function () {
  return "wins:" + winCount + " lose:" + loseCount + " draw: " + drawCount;
};
// Add current game mode, and variable for User Name
var currentGameMode = "waiting for user name";
var UserName = "";

var main = function (input) {
  // Generate and define random SPS
  var sps = getSpsResult();
  console.log("sps");
  console.log(sps);

  // Get user to input username if not already done so

  if (currentGameMode == "waiting for user name") {
    UserName = input;
    // Switch game mode to 'dice game'
    currentGameMode = "dice game";
    var myOutputValue = "Hello " + UserName;
    //return "Hello " + UserName;
  } else if (currentGameMode == "dice game") {
    if (input != scissors && input != paper && input != stone) {
      console.log("invalid input");
      myOutputValue =
        'Invalid input! <br> Kindly enter "scissors", "paper", or "stone" <br>' +
        WinLoseHistory();
    } // Define winning message (win)
    if (
      (input == scissors && sps == paper) ||
      (input == paper && sps == stone) ||
      (input == stone && sps == scissors)
    ) {
      console.log("win");
      winCount = winCount + 1;
      myOutputValue =
        "You win! <br> You input " +
        input +
        " and your opponent chose " +
        sps +
        "! <br>" +
        WinLoseHistory();
    }

    // Define losing message (lose)
    if (
      (input == paper && sps == scissors) ||
      (input == stone && sps == paper) ||
      (input == scissors && sps == stone)
    ) {
      console.log("lose");
      loseCount = loseCount + 1;
      myOutputValue =
        "You lose! <br>  You input " +
        input +
        " and your opponent chose " +
        sps +
        "! <br>" +
        WinLoseHistory();
    }

    // Define draw message (draw)
    if (
      (input == scissors && sps == scissors) ||
      (input == paper && sps == paper) ||
      (input == stone && sps == stone)
    ) {
      console.log("draw");
      drawCount = drawCount + 1;
      myOutputValue =
        "Its a draw! <br> You input " +
        input +
        " and your opponent chose " +
        sps +
        "! <br>" +
        WinLoseHistory();
    }
    // Define error message
  }
  return myOutputValue;
};
