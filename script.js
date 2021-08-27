var main = function (input) {
  var num = numGenerator();
  console.log(num);
  var botOutput = botSpS(num);
  console.log(botOutput);
  var winLoseDraw = decisionMaker(input, botOutput);
  console.log(winLoseDraw);

  return winLoseDraw;
};

var botSpS = function (num) {
  if (num == 1) {
    return "scissors";
  }

  if (num == 2) {
    return "paper";
  }

  if (num == 3) {
    return "stone";
  }
};

var decisionMaker = function (input, botOutput) {
  var input;
  var botOutput;
  if (!(input == "scissors" || input == "paper" || input == "stone")) {
    return (
      "Input invalid. Your input was " +
      input +
      " and the programme only accepts scissors, paper or stone (Caps sensitive). Please try again with valid input."
    );
  }
  if (input == "scissors" && botOutput == "paper") {
    return "You won!";
  }
  if (input == "paper" && botOutput == "stone") {
    return "You won!";
  }
  if (input == "stone" && botOutput == "scissors") {
    return "You won!";
  }
  if (input == "paper" && botOutput == "scissors") {
    return "You lost...";
  }
  if (input == "stone" && botOutput == "paper") {
    return "You lost...";
  }
  if (input == "scissors" && botOutput == "stone") {
    return "You lost...";
  }
  if (input == botOutput) {
    return "Draw! Again!";
  }
};

var botSpS = function (num) {
  if (num == 1) {
    var sPs = "scissors";
    return sPs;
  }

  if (num == 2) {
    return "paper";
  }

  if (num == 3) {
    return "stone";
  }
};

var numGenerator = function () {
  var numAssignDecimal = Math.random() * 3;
  var numAssignInteger = Math.floor(numAssignDecimal);
  var numAssignFinal = numAssignInteger + 1;
  return numAssignFinal;
};
