var generateRandomInteger = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

var generateComputersThrow = function () {
  var typesOfThrows = 3;
  var randomComputersThrow = generateRandomInteger(typesOfThrows);
  if (randomComputersThrow == 1) {
    return "scissors";
  }
  if (randomComputersThrow == 2) {
    return "paper";
  }
  if (randomComputersThrow == 3) {
    return "stone";
  }
  return "error";
};

var main = function (playersThrow) {
  var computersSPS = generateComputersThrow();
  console.log("computer throws " + computersSPS);
  var myOutputValue = "Please only enter scissors, paper, or stone.";
  //draw scenarios//
  if (
    (playersThrow == "scissors" && computersSPS == "scissors") ||
    (playersThrow == "paper" && computersSPS == "paper") ||
    (playersThrow == "stone" && computersSPS == "stone") ||
    (playersThrow == "reversed scissors" && computersSPS == "scissors") ||
    (playersThrow == "reversed paper" && computersSPS == "paper") ||
    (playersThrow == "reversed stone" && computersSPS == "stone")
  ) {
    return (
      "Your throw: " +
      playersThrow +
      "<BR><BR>Computer's throw: " +
      computersSPS +
      "<BR><BR>You draw!"
    );
  }
  //lose scenarios//
  if (
    (playersThrow == "scissors" && computersSPS == "stone") ||
    (playersThrow == "paper" && computersSPS == "scissors") ||
    (playersThrow == "stone" && computersSPS == "paper") ||
    (playersThrow == "reversed scissors" && computersSPS == "paper") ||
    (playersThrow == "reversed paper" && computersSPS == "stone") ||
    (playersThrow == "reversed stone" && computersSPS == "scissors")
  ) {
    return (
      "Your throw: " +
      playersThrow +
      "<BR><BR>Computer's throw: " +
      computersSPS +
      "<BR><BR>You LOOOSER 🤡🤡🤡"
    );
  }
  //win scenarios//
  if (
    (playersThrow == "scissors" && computersSPS == "paper") ||
    (playersThrow == "paper" && computersSPS == "stone") ||
    (playersThrow == "stone" && computersSPS == "scissors") ||
    (playersThrow == "reversed scissors" && computersSPS == "stone") ||
    (playersThrow == "reversed paper" && computersSPS == "scissors") ||
    (playersThrow == "reversed stone" && computersSPS == "paper")
  ) {
    return (
      "Your throw: " +
      playersThrow +
      "<BR><BR>Computer's throw: " +
      computersSPS +
      "<BR><BR>U A WINNER 🎉🎉🎉"
    );
  }

  return myOutputValue;
};
//UHM HOW TO GROUP EVERYTHING BY SCENARIOS MORE SUCCINCTLY AH//
