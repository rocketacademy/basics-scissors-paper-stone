var main = function (input) {
  var SCISSORS = "scissors";
  var PAPER = "paper";
  var STONE = "stone";
  var reversedSCISSORS = "reversed scissors";
  var reversedPAPER = "reversed paper";
  var reversedSTONE = "reversed stone";
  var CommputerObject = randomObjectByComputer();
  var myOutputValue =
    "Invalid input. Please enter 'scissors', 'paper', 'stone', 'reversed scissors', 'reversed paper' or 'reversed stone' to start the game.";

  // scissors and scissors draw condition
  if (
    (input == SCISSORS && CommputerObject == SCISSORS) ||
    (input == reversedSCISSORS && CommputerObject == SCISSORS)
  ) {
    console.log("computer choice");
    console.log(CommputerObject);
    myOutputValue =
      "You chose " +
      input +
      " ✂️.<br><br> Computer chose scissors ✂️. <br><br> It's a draw.";
  }
  // lose condition when computer plays scissors
  // scissors beats paper
  // scissors beats reversed stone
  if (
    (input == PAPER && CommputerObject == SCISSORS) ||
    (input == reversedSTONE && CommputerObject == SCISSORS)
  ) {
    console.log("computer choice");
    console.log(CommputerObject);
    myOutputValue =
      "You chose " +
      input +
      " 🗒. <br><br> Computer chose scissors ✂️. <br><br>  You lost.";
  }
  // win condition when computer plays scissors
  // stone beats scissors
  // reversed paper beats scissors
  if (
    (input == STONE && CommputerObject == SCISSORS) ||
    (input == reversedPAPER && CommputerObject == SCISSORS)
  ) {
    console.log("computer choice");
    console.log(CommputerObject);
    myOutputValue =
      "You chose " +
      input +
      " 💎. <br><br> Computer chose scissors ✂️.<br><br> You won!";
  }

  // win condition when computer plays paper
  // scissors bears paper
  // reversed stone beats paper
  if (
    (input == SCISSORS && CommputerObject == PAPER) ||
    (input == reversedSTONE && CommputerObject == PAPER)
  ) {
    console.log("computer choice");
    console.log(CommputerObject);
    myOutputValue =
      "You chose " +
      input +
      " ✂️.<br><br> Computer chose paper 🗒.<br><br> You won!";
  }
  // paper and paper draw condition
  if (
    (input == PAPER && CommputerObject == PAPER) ||
    (input == reversedPAPER && CommputerObject == PAPER)
  ) {
    console.log("computer choice");
    console.log(CommputerObject);
    myOutputValue =
      "You chose " +
      input +
      " 🗒.<br><br> Computer chose paper 🗒.<br><br> It's a draw.";
  }
  // lose condition when computer plays paper
  // paper beats stone
  // paper beats reversed scissors
  if (
    (input == STONE && CommputerObject == PAPER) ||
    (input == reversedSCISSORS && CommputerObject == PAPER)
  ) {
    console.log("computer choice");
    console.log(CommputerObject);
    myOutputValue =
      "You chose " +
      input +
      " 💎.<br><br> Computer chose paper 🗒. <br><br>You lost.";
  }
  // lose condition when computer plays stone
  // stone beats scissors
  // stone beats reversed paper
  if (
    (input == SCISSORS && CommputerObject == STONE) ||
    (input == reversedPAPER && CommputerObject == STONE)
  ) {
    console.log("computer choice");
    console.log(CommputerObject);
    myOutputValue =
      "You chose " +
      input +
      " ✂️.<br><br> Computer chose stone 💎.<br><br> You lost.";
  }
  // win condition when computer plays stone
  // paper beats stone
  // reversed scissors beats stone
  if (
    (input == PAPER && CommputerObject == STONE) ||
    (input == reversedSCISSORS && CommputerObject == STONE)
  ) {
    console.log("computer choice");
    console.log(CommputerObject);
    myOutputValue =
      "You chose " +
      input +
      " 🗒.<br><br> Computer chose stone 💎.<br><br> You won!";
  }
  // stone and stone draw condition
  if (
    (input == STONE && CommputerObject == STONE) ||
    (input == reversedSTONE) & (CommputerObject == STONE)
  ) {
    console.log("computer choice");
    console.log(CommputerObject);
    myOutputValue =
      "You chose " +
      input +
      " 💎.<br><br> Computer chose stone 💎.<br><br> It's a draw.";
  }
  return myOutputValue;
};

// assigning values 0,1,2 to the object computer will draw
var randomObjectByComputer = function () {
  var SCISSORS = "scissors";
  var PAPER = "paper";
  var STONE = "stone";
  var randomDecimal = Math.random() * 3;
  var randomNum = Math.floor(randomDecimal);
  if (randomNum == 0) {
    return SCISSORS;
  }
  if (randomNum == 1) {
    return PAPER;
  }
  return STONE;
};
