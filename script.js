var diceRoll = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger;

  if (diceNumber == 0) {
    var progOutput = "scissors";
  }
  if (diceNumber == 1) {
    var progOutput = "paper";
  }
  if (diceNumber == 2) {
    var progOutput = "stone";
  }
  return progOutput;
};

var icon = function (input, comOutput) {
  if (input == "scissors" || comOutput == "scissors") return "✂️";
  if (input == "paper" || comOutput == "paper") return "🗒";
  if (input == "stone" || comOutput == "stone") return "🚀";
};

var main = function (input) {
  var comOutput = diceRoll();
  var userObject = icon(input);
  var comObject = icon(comOutput);

  var myOutputValue = `Input is invalid. Do only enter scissors, paper or stone`;

  if (input == comOutput) {
    var myOutputValue = `User chose ${input}${userObject} <br> Computer chose ${comOutput}${comObject} <br><br>
    It's a draw! `;
  }

  if (
    (input == "scissors" && comOutput == "paper") ||
    (input == "paper" && comOutput == "stone") ||
    (input == "stone" && comOutput == "scissors")
  ) {
    var myOutputValue = `User chose ${input}${userObject} <br>
    Computer chose ${comOutput}${comObject}<br><br>
    User wins!`;
  }

  if (
    (input == "paper" && comOutput == "scissors") ||
    (input == "stone" && comOutput == "paper") ||
    (input == "scissors" && comOutput == "stone")
  ) {
    var myOutputValue = `User chose ${input}${userObject} <br>
    Computer chose ${comOutput}${comObject}<br><br>
    Computer wins!`;
  }
  return myOutputValue;
};
