// Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw. Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.

// -------------------------------------------------------------------
// -------------------- GLOBAL VARIABLES -----------------------------
// -------------------------------------------------------------------

// Define 'scissors', 'paper', and 'stone' as variables
var scissors = "scissors";
var paper = "paper";
var stone = "stone";

// Add variable for win/lose game state
var winCount = 0;
var loseCount = 0;
var drawCount = 0;

// Add default variable for current mode, user Name, and game mode
var currentMode = "waiting for username";
var UserName = "";
var gameMode = "";

// Add default variable for most recent winner (for Korean mode SPS)
var mostRecentWinner = "";

// -------------------------------------------------------------------
// ------------------- HELPER FUNCTIONS ------------------------------
// -------------------------------------------------------------------

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

// -------------------------------------------------------------------
// ----------------------- MAIN FUNCTION -----------------------------
// -------------------------------------------------------------------

var main = function (input) {
  // Generate and define random SPS
  var sps = getSpsResult();
  console.log("sps");
  console.log(sps);

  // Get user to input username if not already done so

  if (currentMode == "waiting for username") {
    UserName = input;
    // Switch current mode to 'mode selection'
    currentMode = "mode selection";
    return (
      "Hello " +
      UserName +
      "!" +
      " Please select a mode by typing in one of the following: <br> 1. normal <br> 2. reverse <br> 3. korean"
    );
  } else if (currentMode == "mode selection") {
    if (input != "normal" && input != "reverse" && input != "korean") {
      myOutputValue =
        'Kindly enter "normal", "reverse", or "korean" to select a game mode';
    }
    if (input == "normal" || input == "reverse" || input == "korean") {
      // Switch current mode to "dice game"
      currentMode = "dice game";
      // Switch game mode to user's choice
      gameMode = input;
    }
  }
  if (gameMode == "normal") {
    // NORMAL SPS RULES APPLY

    // Define error message
    if (input != scissors && input != paper && input != stone) {
      console.log("invalid input");
      myOutputValue =
        'Kindly enter "scissors", "paper", or "stone" <br>' + WinLoseHistory();
    }

    // Define winning message (win)
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
  } else if (gameMode == "reverse") {
    // REVERSE SPS RULES APPLY

    // Define error message
    if (input != scissors && input != paper && input != stone) {
      console.log("invalid input");
      myOutputValue =
        'Kindly enter "scissors", "paper", or "stone" <br>' + WinLoseHistory();
    }

    // Define winning message (win)
    if (
      (input == scissors && sps == paper) ||
      (input == stone && sps == paper) ||
      (input == scissors && sps == stone)
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
      (input == scissors && sps == paper) ||
      (input == paper && sps == stone) ||
      (input == stone && sps == scissors)
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
  } else if (gameMode == "korean") {
    // KOREAN RULES APPLY: Update the program state such that it can keep track of the most recent winner, and update the program logic to declare the most recent winner the ultimate winner when there is a draw

    // Define error message
    if (input != scissors && input != paper && input != stone) {
      console.log("invalid input");
      myOutputValue =
        'Kindly enter "scissors", "paper", or "stone" <br>' + WinLoseHistory();
    }
    // Define draw what happens when a draw occurs
    if (
      (input == scissors && sps == scissors) ||
      (input == paper && sps == paper) ||
      (input == stone && sps == stone)
    ) {
      // Check if there was a most recent winner, if none, show first-round draw message
      if (mostRecentWinner == "") {
        console.log("first round draw");
        drawCount = drawCount + 1;
        myOutputValue =
          "Its a first-round draw! <br> You input " +
          input +
          " and your opponent chose " +
          sps +
          "! <br>" +
          WinLoseHistory();
        // If most recent winner was "player", define winning message
      }
      if (mostRecentWinner == "player") {
        console.log("final win");
        winCount = winCount + 1;
        myOutputValue =
          "You win! <br> You were the most recent winner, and its a now a draw! <br> You input " +
          input +
          " and your opponent chose " +
          sps +
          "! <br>" +
          WinLoseHistory();
        // If most recent winner was "computer", define losing message
      }
      if (mostRecentWinner == "computer") {
        console.log("lose");
        loseCount = loseCount + 1;
        myOutputValue =
          "You lose! <br> The comupter was the most recent winner, and its a now a draw! <br> You input " +
          input +
          " and your opponent chose " +
          sps +
          "! <br>" +
          WinLoseHistory();
      }
    }
    // Define most recent win (win)
    if (
      (input == scissors && sps == paper) ||
      (input == stone && sps == scissors) ||
      (input == paper && sps == stone)
    ) {
      console.log("win");
      mostRecentWinner = "player";
      myOutputValue =
        "You win this match! <br> You are currently the most recent winner! <br> Get a draw to REALLY win! <br> You input " +
        input +
        " and your opponent chose " +
        sps +
        "! <br>" +
        WinLoseHistory();
    }

    // Define most recent win (lose)
    if (
      (input == scissors && sps == paper) ||
      (input == paper && sps == scissors) ||
      (input == stone && sps == paper)
    ) {
      console.log("lose");
      mostRecentWinner = "computer";
      myOutputValue =
        "You lost this match! <br> Your opponent is currently the most recent winner! <br> Win the next match to gain back lead! <br> You input " +
        input +
        " and your opponent chose " +
        sps +
        "! <br>" +
        WinLoseHistory();
    }
  }
  return myOutputValue;
};
