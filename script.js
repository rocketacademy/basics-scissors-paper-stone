var scissors = "scissors";
var paper = "paper";
var stone = "stone";

// main function for scissors paper stone game.

var main = function (input) {
  var randomSps = getSpsRandom();
  console.log(`computer choice is ${randomSps}`);
  console.log(`player choice is ${input}`);

  // if the outcome is a draw.

  if (input == randomSps) {
    console.log("it's a draw!");
    myOutputValue = `it's a draw!`;
  }

  // if outcome is player wins.
  else if (
    (input == scissors && randomSps == paper) ||
    (input == paper && randomSps == stone) ||
    (input == stone && randomSps == scissors)
  ) {
    console.log("you win!");
    myOutputValue = `you win!`;
  }

  // if outcome is player loses.
  else if (
    (input == scissors && randomSps == stone) ||
    (input == stone && randomSps == paper) ||
    (input == paper && randomSps == scissors)
  ) {
    console.log("you lost!");
    myOutputValue = `you lost!`;
  }

  // if input is an error
  else {
    console.log("input error, kindly try again, thanks!");
    return `input error, kindly input a valid choice and try again! thanks!`;
  }
  return `${myOutputValue} you chose ${input} and computer chose ${randomSps}.`;
};

// function to randomly generate SPS

var getSpsRandom = function () {
  var sps = ["scissors", "paper", "stone"];
  var randomSps = sps[Math.floor(Math.random() * sps.length)];
  return randomSps;
};
