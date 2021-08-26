var scissors = "scissors";
var paper = "paper";
var stone = "stone";

var main = function (input) {
  var randomSps = getSpsRandom(input);
  console.log(`computer choice is ${randomSps}`);
  console.log(`player choice is ${input}`);

  if (input == randomSps) {
    console.log("it's a draw!");
    return `it's a draw!`;
  }

  if (
    (input == scissors && randomSps == paper) ||
    (input == paper && randomSps == stone) ||
    (input == stone && randomSps == scissors)
  ) {
    console.log("you win!");
    return `you win! you chose ${input} and computer chose ${randomSps}.`;
  }

  if (
    (input == scissors && randomSps == stone) ||
    (input == stone && randomSps == paper) ||
    (input == paper && randomSps == scissors)
  ) {
    console.log("you lost!");
    return `you lost! you chose ${input} and computer chose ${randomSps}.`;
  }

  console.log("input error, kindly try again, thanks!");
  var myOutputValue = `input error, kindly try again, thanks!`;
  return myOutputValue;
};

var getSpsRandom = function () {
  var sps = ["scissors", "paper", "stone"];
  var randomSps = sps[Math.floor(Math.random() * sps.length)];
  return randomSps;
};
