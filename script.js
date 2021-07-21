// Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw. Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.

// Define 'scissors', 'paper', and 'stone' as variables

var scissors = "scissors";
var paper = "paper";
var stone = "stone";

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

var main = function (input) {
  // Generate and define random SPS
  var sps = getSpsResult();
  console.log("sps");
  console.log(sps);

  // Define default message (lose)
  var myOutputValue =
    "You lose!  You input " + input + " and your opponent chose " + sps + "!";

  // Define winning message (win)
  if (
    (input == scissors && sps == paper) ||
    (input == paper && sps == stone) ||
    (input == stone && sps == scissors)
  ) {
    console.log("win");
    myOutputValue =
      "You win! You input " + input + " and your opponent chose " + sps + "!";
  }
  // Define draw message (draw)
  if (
    (input == scissors && sps == scissors) ||
    (input == paper && sps == paper) ||
    (input == stone && sps == stone)
  ) {
    console.log("draw");
    myOutputValue =
      "Its a draw! You input " +
      input +
      " and your opponent chose " +
      sps +
      "!";
  }
  // Define error message
  if (input != scissors && input != paper && input != stone) {
    console.log("invalid input");
    myOutputValue =
      'Invalid input! Kindly enter "scissors", "paper", or "stone"';
  }

  return myOutputValue;
};
