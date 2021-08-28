var main = function (input) {
  console.log(input);

  var spsOutput = spsGenerator();
  console.log(spsOutput);

  var gameOutcome = getGameOutcome(input, spsOutput);
  console.log("gameOutcome");
  console.log(gameOutcome);

  //if function to switch to reversed rules if reversed input is entered
  if (
    input == "reversed scissors" ||
    input == "reversed paper" ||
    input == "reversed stone"
  ) {
    var gameOutcome = getReversedGameOutcome(input, spsOutput);
    console.log("reversedGameOutcome");
    console.log(gameOutcome);
  }

  var myOutputValue =
    "You chose " +
    input +
    ".<br>The computer chose " +
    spsOutput +
    ".<br><br>You " +
    gameOutcome +
    "!<br><br>Enter another input to play again!";

  //if function to return error if input != scissors, paper, stone, reversed scissors, reversed paper, reversed stone
  if (
    input != "scissors" &&
    input != "paper" &&
    input != "stone" &&
    input != "reversed scissors" &&
    input != "reversed paper" &&
    input != "reversed stone"
  )
    var myOutputValue =
      "Please enter only:<br><br>1. scissors<br>2. paper<br>3. stone<br><br>Or you can try your luck at reversed Scissors-Paper-Stone by adding reversed in front of your choice.";

  return myOutputValue;
};

//function to decide on game outcome
var getGameOutcome = function (input, spsOutput) {
  if (input == "scissors" && spsOutput == "paper") var gameOutcome = "win";
  if (input == "scissors" && spsOutput == "stone") var gameOutcome = "lose";
  if (input == "paper" && spsOutput == "scissors") var gameOutcome = "lose";
  if (input == "paper" && spsOutput == "stone") var gameOutcome = "win";
  if (input == "stone" && spsOutput == "scissors") var gameOutcome = "win";
  if (input == "stone" && spsOutput == "paper") var gameOutcome = "lose";
  if (input == spsOutput) var gameOutcome = "draw";
  return gameOutcome;
};

//random number generator to give scissors, paper or stone
var spsGenerator = function () {
  var randomNum1to3 = Math.ceil(Math.random() * 3);
  if (randomNum1to3 == 1) var spsOutput = "scissors";
  if (randomNum1to3 == 2) var spsOutput = "paper";
  if (randomNum1to3 == 3) var spsOutput = "stone";
  return spsOutput;
};

//function to decide on reversed game outcome
var getReversedGameOutcome = function (input, spsOutput) {
  if (input == "reversed scissors" && spsOutput == "paper")
    var gameOutcome = "lose";
  if (input == "reversed scissors" && spsOutput == "stone")
    var gameOutcome = "win";
  if (input == "reversed paper" && spsOutput == "scissors")
    var gameOutcome = "win";
  if (input == "reversed paper" && spsOutput == "stone")
    var gameOutcome = "lose";
  if (input == "reversed stone" && spsOutput == "scissors")
    var gameOutcome = "lose";
  if (input == "reversed stone" && spsOutput == "paper")
    var gameOutcome = "win";
  if (input == "reversed paper" && spsOutput == "paper")
    var gameOutcome = "draw";
  if (input == "reversed scissors" && spsOutput == "scissors")
    var gameOutcome = "draw";
  if (input == "reversed stone" && spsOutput == "stone")
    var gameOutcome = "draw";

  console.log("reverse outcome generator");

  return gameOutcome;
};
