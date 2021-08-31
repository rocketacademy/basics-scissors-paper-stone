var win = 0;
var loss = 0;
var draw = 0;

var main = function (input) {
  var num = numGenerator();
  console.log(num);
  var botOutput = botSpS(num);
  console.log(botOutput);
  var winLoseDraw = decisionMaker(input, botOutput);
  console.log(winLoseDraw);

  console.log(win);
  console.log(loss);
  console.log(draw);

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
    win = win + 1;
    return (
      "You won! Your Win-Lose-Draw record is " + win + "-" + loss + "-" + draw
    );
  }
  if (input == "paper" && botOutput == "stone") {
    win = win + 1;
    return (
      "You won! Your Win-Lose-Draw record is " + win + "-" + loss + "-" + draw
    );
  }
  if (input == "stone" && botOutput == "scissors") {
    win = win + 1;
    return (
      "You won! Your Win-Lose-Draw record is " + win + "-" + loss + "-" + draw
    );
  }
  if (input == "paper" && botOutput == "scissors") {
    loss = loss + 1;
    return (
      "You lost! Your Win-Lose-Draw record is " + win + "-" + loss + "-" + draw
    );
  }
  if (input == "stone" && botOutput == "paper") {
    loss = loss + 1;
    return (
      "You lost! Your Win-Lose-Draw record is " + win + "-" + loss + "-" + draw
    );
  }
  if (input == "scissors" && botOutput == "stone") {
    loss = loss + 1;
    return (
      "You lost! Your Win-Lose-Draw record is " + win + "-" + loss + "-" + draw
    );
  }
  if (input == botOutput) {
    draw = draw + 1;
    return (
      "You drew! Your Win-Lose-Draw record is " + win + "-" + loss + "-" + draw
    );
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
