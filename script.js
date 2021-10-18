/*
This is a scissors-paper-stone (SPS) game 
*/

// global variables
var nTotalPlays = 0;
var nUserWins = 0;
var nDraws = 0;
var gameMode = "inputUserName";
var userName = "";

// for any valid user input, gives the result
var computeOutcome = function (userInput, programInput) {
  var outcome = "";
  // draw
  if (userInput == programInput || userInput == "reversed " + programInput) {
    outcome = "it's a draw!";
    nDraws += 1;
  }
  // user wins
  else if (
    (userInput == "scissors" && programInput == "paper") ||
    (userInput == "stone" && programInput == "scissors") ||
    (userInput == "paper" && programInput == "stone")
  ) {
    outcome = "you win";
    // add to user win counter
    nUserWins += 1;
  }
  // REVERSED logic -- user wins
  else if (
    (userInput == "reversed scissors" && programInput == "stone") ||
    (userInput == "reversed stone" && programInput == "paper") ||
    (userInput == "reversed paper" && programInput == "scissors")
  ) {
    outcome = "You win in this tricky reversed game!";
    // add to user win counter
    nUserWins += 1;
  }

  // program wins
  else if (
    (userInput == "scissors" && programInput == "stone") ||
    (userInput == "stone" && programInput == "paper") ||
    (userInput == "paper" && programInput == "scissors")
  ) {
    outcome = "the computer wins";
  }

  // REVERSED logic-- program wins
  else if (
    (userInput == "reversed scissors" && programInput == "paper") ||
    (userInput == "reversed stone" && programInput == "scissors") ||
    (userInput == "reversed paper" && programInput == "stone")
  ) {
    outcome = "You lost in this tricky reversed game!";
  }
  return outcome;
};

// returns a random digit from 1 to X
var randDigit = function (x) {
  // return a number from [0,x)
  var number = Math.random() * x;
  // return a digit between 0 and x-1
  var digit = Math.floor(number);
  return digit + 1;
};

// randomly draws 1 of the 3 outcomes of scissors, paper, or stone
var randomDraw = function () {
  var draw = "";
  var selector = randDigit(3);
  if (selector == 1) {
    draw = "scissors";
  }
  if (selector == 2) {
    draw = "paper";
  }
  if (selector == 3) {
    draw = "stone";
  }
  return draw;
};

// main function
var main = function (input) {
  // mode 1: get username
  if (gameMode == "inputUserName") {
    // set the name
    userName = input;
    // now that we have the name, switch mode
    gameMode = "playGame";
    return "Hello " + userName + ", proceed to make your SPS choice";
  }

  // mode 2: play game
  else if (gameMode == "playGame") {
    // input validation
    if (
      !(
        input == "scissors" ||
        input == "paper" ||
        input == "stone" ||
        input == "reversed scissors" ||
        input == "reversed paper" ||
        input == "reversed stone"
      )
    ) {
      // invalid input, cannot play
      return "Please try again. Input only scissors, paper, or stone.";
    } else {
      // valid input, proceed to play
      var programDraw = randomDraw();
      nTotalPlays += 1;
      // determine outcome of game
      var outcome = computeOutcome(input, programDraw);

      // calculate win percentage
      var winPct = ((nUserWins / nTotalPlays) * 100).toFixed(1);
      var extraMsg = "";
      if (winPct >= 50) {
        extraMsg = "You're doing great!";
      } else if (winPct < 50) {
        extraMsg = "Gotta catch up!";
      }

      return (
        userName +
        " versus the computer" +
        "<br><br>You chose: " +
        input +
        "<br>Computer chose: " +
        programDraw +
        "<br><br>Outcome: " +
        outcome +
        "<br><br>Current stats: Of " +
        nTotalPlays +
        " games played, " +
        userName +
        " won " +
        nUserWins +
        ", computer won " +
        (nTotalPlays - nUserWins - nDraws) +
        ", and " +
        nDraws +
        " draws.<br>" +
        userName +
        " has won " +
        winPct +
        "% of games played so far. " +
        extraMsg
      );
    }
  }
};
