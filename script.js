var main = function (input) {
  var randomOutcome = generateSPS();
  console.log(randomOutcome);
  var myOutputValue = "please input: scissors, paper, or stone.";

  // input is scissors
  if (input == "scissors" && randomOutcome == "paper") {
    myOutputValue = "you win";
  }
  if (input == "scissors" && randomOutcome == "stone") {
    myOutputValue = "you lose";
  }
  if (input == "scissors" && randomOutcome == "scissors") {
    myOutputValue = "you draw";
  }

  // input is paper
  if (input == "paper" && randomOutcome == "paper") {
    myOutputValue = "you draw";
  }
  if (input == "paper" && randomOutcome == "stone") {
    myOutputValue = "you win";
  }
  if (input == "paper" && randomOutcome == "scissors") {
    myOutputValue = "you lose";
  }

  // input is stone
  if (input == "stone" && randomOutcome == "paper") {
    myOutputValue = "you lose";
  }
  if (input == "stone" && randomOutcome == "stone") {
    myOutputValue = "you draw";
  }
  if (input == "stone" && randomOutcome == "scissors") {
    myOutputValue = "you win";
  }

  return myOutputValue;
};

// random generation
var generateSPS = function () {
  var randomNo = Math.random() * 3;
  var randomSPS = Math.floor(randomNo);
  if (randomSPS == 0) {
    return "scissors";
  }
  if (randomSPS == 1) {
    return "paper";
  }
  return "stone";
};
