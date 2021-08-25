var main = function (input) {
  var comOutput = diceRoll();
  console.log("user input");
  console.log(input);

  if (input == comOutput) {
    var myOutputValue = `It's a draw! User chose ${input} and computer chose ${comOutput}`;
  }

  if (
    (input == "scissors" && comOutput == "paper") ||
    (input == "paper" && comOutput == "stone") ||
    (input == "stone" && comOutput == "scissors")
  ) {
    var myOutputValue = `User wins! User chose ${input} and computer chose ${comOutput}`;
  }

  if (
    (input == "paper" && comOutput == "scissors") ||
    (input == "stone" && comOutput == "paper") ||
    (input == "scissors" && comOutput == "stone")
  ) {
    var myOutputValue = `Computer wins! User chose ${input} and computer chose ${comOutput}`;
  }
  return myOutputValue;
};

var diceRoll = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger;
  console.log("dice roll");
  console.log(diceNumber);
  if (diceNumber == 0) {
    var progOutput = "scissors";
    console.log("computer output");
    console.log(progOutput);
  }

  if (diceNumber == 1) {
    var progOutput = "paper";
    console.log("com output");
    console.log(progOutput);
  }

  if (diceNumber == 2) {
    var progOutput = "stone";
    console.log("com output");
    console.log(progOutput);
  }
  return progOutput;
};
